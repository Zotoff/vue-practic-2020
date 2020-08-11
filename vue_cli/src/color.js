/*Custom color directive*/
export default {
    bind(el, bindings, vnode) {
        console.log('binding')
        const arg = bindings.arg
        const fontModifier = bindings.modifiers['font']
        el.style[arg] = bindings.value

        if(fontModifier) {
            el.style.fontSize = '2rem'
        }
    },
    inserted(el, bindings, vnode) {
        console.log('inserted...')
    },
    update(el, bindings, vnode, oldVnode){
        console.log('updated')
    },
    componentUpdated(el, bindings, vnode, oldVnode){
        console.log('componentUpdated')
    },
    unbind(){
        console.log('Unbind...')
    }
}