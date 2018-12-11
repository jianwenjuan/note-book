import Modal from './confirm';

let modalInstance;

function getModalInstance(render = undefined) {
    modalInstance = modalInstance || Modal.newInstance({
        show: true,
        isShowMask: true,
        isShowFooter: true,
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


Modal.confirm = function(props={}){
    return confirm(props);
}


export default Modal;