import Modal from './confirm';

let modalInstance;

function getModalInstance(render = undefined) {
    modalInstance = modalInstance || Modal.newInstance({
        show: true,
        isShowMask: true,
        isShowFooter: false,
        render

    });

    return modalInstance;
}

function confirm (options) {
    const render = ('render' in options) ? options.render : undefined;
    let instance  = getModalInstance(render);

    options.onRemove = function () {
        modalInstance = null;
    };

    instance.show(options);
}

function error(options){

    const render = ('render' in options) ? options.render : undefined;
    let instance  = getModalInstance(render);

    options.onRemove = function () {
        modalInstance = null;
    };

    options.showCancel = false;

    instance.show(options);

}


Modal.confirm = function(props={}){
    return confirm(props);
}

Modal.error = function(props={}){
    return error(props)
}


export default Modal;