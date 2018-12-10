 const common = {
    //  深拷贝
    deepCopy(source,target={}){

        for(var key in source) {
            if(Object.prototype.hasOwnProperty.call(source,key)){
                if(typeof(source[key])==='object'){
                    target[key] = Array.isArray(source[key])?[]:{};
                    this.deepCopy(source[key],target[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }

        return target;

    }
}

export default common;