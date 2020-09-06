import * as fb from 'firebase'
import 'firebase/database'
import 'firebase/storage'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      const image = payload.image
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo
        )
        // Push the new ad to the database
        const ad = await fb.database().ref('ads').push(newAd)

        if (ad) {
          console.log('Pushing ad....')
          console.log(newAd)
        }

        // Load the image extension
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))

        // Save the file in the local
        const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
        let imageSrc = ''
        fileData.metadata.ref.getDownloadURL()
          .then(src => {
            console.log(src)
            imageSrc = src
          })
        if (fileData) {
          console.log('upload the image...')
          console.log(imageSrc)
        }

        // Update the imageSrc in DB
        await fb.database().ref('ads').child(ad.key).update({
          imageSrc
        })

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        console.log(error.stack)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.desciption, ad.ownerId, ad.imageSrc, ad.promo, key)
          )
        })
        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        console.log(error.stack)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
