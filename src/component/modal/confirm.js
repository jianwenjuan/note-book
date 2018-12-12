import Modal from './modal';
import Vue from 'vue';

Modal.newInstance = properties => {
    console.log(Modal);
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({}, _props, {
            title: '提示',
            showCancel: false,
            body: 'neirong',
            visible: false
        }),
        render(h) {
            let footerVNODES = [];
            if (this.showCancel) {
                footerVNODES.push(h('button', {
                    attrs: {
                        class: 'cancel'
                    },
                    on: {
                        click: this.cancel
                    }
                }, this.t('取消')))
            }
            footerVNODES.push(h('button', {
                attrs: {
                    class: 'confirm'

                },
                on: {
                    click: this.ok
                }
            }));

            let body_render;
            body_render = h('div', {
                attrs: {

                },
                domProps: {
                    innerHTML: this.body
                }
            })


            let header_render;
            if (this.title) {
                header_render = h('div', {
                    attrs: {

                    },
                    domProps: {
                        innerHTML: this.title
                    }
                })
            }
            return h(Modal, {
                props: Object.assign({}, _props),
                on: {
                },
                domProps: {
                    value: this.visible
                },
                scopedSlots:{
                    header_render,
                    body_render,
                    footerVNODES

                }
            }, [
                    h('div', {
                        attrs: {

                        }

                    }, [
                            header_render,
                            body_render,
                            footerVNODES

                        ])

                ]);
        },
        methods: {
            cancel() {
                this.$children[0].visible = false;
                this.onCancel();
                this.destroy();

            },
            ok() {
                this.onOk();
                this.destroy();
            },
            remove() {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
            },
            onCancel() {

            },
            onOk() {

            }

        }
    });

    console.log(Instance);

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const modal = Instance.$children[0];

    console.log(modal);



    return {
        show(props) {

            // if('isShowMask' in props){
            //     modal.isShowMask = props.isShowMask;
            // }

            // if('isShowFooter' in props){
            //     modal.isShowFooter = props.isShowFooter;

            // }

            // if('showCancel' in props){
            //     modal.$parent.showCancel = props.showCancel;
            // }

            // if ('okCallback' in props) {
            //     modal.okCallback = props.okCallback;
            // }

            // if ('cancelCallback' in props) {
            //     modal.cancelCallback = props.cancelCallback;
            // }

            modal.visible = true;

        },
        remove() {
            modal.visible = false;
            modal.$parent.remove();
        },
        // component: modal
    }
}


export default Modal;