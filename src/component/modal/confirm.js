import Modal from './modal';
import Vue from 'vue';

Modal.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({},_props,{

            title:'提示'
        }),
        render(h) {
            return h(Modal, {
                props: _props,
                on: {
                }
            });
        },
        methods: {
            remove () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
            },
         
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const modal = Instance.$children[0];



    return {
        show(props){

            if('isShowMask' in props){
                modal.isShowMask = props.isShowMask;
            }

            if('isShowFooter' in props){
                modal.isShowFooter = props.isShowFooter;

            }

            if ('okCallback' in props) {
                modal.okCallback = props.okCallback;
            }

            if ('cancelCallback' in props) {
                modal.cancelCallback = props.cancelCallback;
            }

            modal.visible = true;

        },
        remove () {
            modal.visible = false;
            modal.$parent.remove();
        },
        component: modal
    }
}


export default Modal;