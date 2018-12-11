import Modal from './modal';
import Vue from 'vue';

Modal.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({},_props,{
            visible: false,
            width: 416,
            title:''

        }),
        render(h) {
            return h(Modal, {
                props: _props,
                on: {
                    
                }
            });
          
        },
        methods: {
            cancel(){
                this.$children[0].visible = false;
                this.onCancel();
                this.remove();

            },
            ok() {
                this.$children[0].visible = false;
                this.remove();
                this.onOk();
            },

            remove() {
                setTimeout(()=>{
                    this.destroy();

                },300)
            },
            destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk(){

            },
            onRemove(){

            }
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const modal = Instance.$children[0];



    return {
        show(props){
            if('show' in props) {
                modal.$parent.show = props.show;
            }

            if('isShowMask' in props){
                modal.$parent.isShowMask = props.isShowMask;

            }

            if('isShowFooter' in props){
                modal.$parent.isShowFooter = props.isShowFooter;

            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
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