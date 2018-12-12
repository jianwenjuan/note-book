import Modal from './modal';
import Vue from 'vue';

Modal.newInstance = properties => {
    console.log(Modal);
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({}, _props, {
            title: '提示',
            width: 416,
            height: 180,
            showCancel: false,
            body: 'neirong',
            visible: false,
            closable: false
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
                }, '取消'))
            }
            footerVNODES.push(h('button', {
                attrs: {
                    class: 'confirm'

                },
                on: {
                    click: this.ok
                }
            }, '确定'));

            let body_render;
            body_render = h('div', {
                attrs: {
                    class: 'modal-body'
                }
            }, [
                    h('div', {
                        domProps: {
                            innerHTML: this.body
                        }
                    })
                ]);


            let header_render;
            if (this.title) {
                header_render = h('header', {
                    attrs: {
                        class: 'modal-title'
                    }

                }, [
                        h('div', {
                            attrs: {
                                class: 'modal-head-title'
                            },
                            domProps: {
                                innerHTML: this.title
                            }
                        })
                    ])
            }
            return h(Modal, {
                props: Object.assign({}, _props, {
                    closable: this.closable,
                    width: this.width,
                    height:this.height
                }),
                on: {
                },
                domProps: {
                    value: this.visible
                }
            }, [

                    header_render,
                    body_render,
                    h('footer', {
                        attrs: {
                            class: 'modal-footer'
                        }
                    }, footerVNODES)

                ]);
        },
        methods: {
            cancel() {
                this.$children[0].visible = false;
                this.onCancel();
                this.destroy();

            },
            ok() {
                this.$children[0].visible = false;
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
                this.onRemove();
            },
            onCancel() {

            },
            onOk() {

            },
            onRemove () {}

        }
    });


    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const modal = Instance.$children[0];





    return {
        show(props) {
            if ('closable' in props) {
                modal.$parent.closable = props.closable;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('showCancel' in props) {
                modal.$parent.showCancel = props.showCancel;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            modal.$parent.onRemove = props.onRemove;
            modal.visible = true;

        },
        remove() {
            modal.visible = false;
            modal.$parent.remove();
        },
        component: modal
    }
}


export default Modal;