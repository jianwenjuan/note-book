const common = {
    //  深拷贝
    deepCopy(source, target = {}) {

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (typeof (source[key]) === 'object') {
                    target[key] = Array.isArray(source[key]) ? [] : {};
                    this.deepCopy(source[key], target[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }

        return target;

    },
    getCookie(name) {
        let arr;
        const reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return arr[2];

        } else {
            return null;
        }
    },
    setCookie(c_name, value, expiredays) {
        const exdate = new Date();

        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + '=' + escape(value) + ((expiredays === null ? '' : ';expires=' + exdate.toGMTString()));


    },
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

}

export default common;