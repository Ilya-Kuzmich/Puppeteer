
class BaseObject {

    #ph = require('../pageHolder');
    #cache = {};

    get ph() {
        return this.#ph;
    }

    createGetter(Constructor) {
        let key = Constructor.toString();
        if (this.#cache[key]) {
            return this.#cache[key];
        }
        let obj = new Constructor();
        this.#cache[key] = obj;
        return obj;
    }

    async getText(element){
        return (await ((await this[element]).evaluate(node => node.innerText))).trim();
            
    }
     
}

module.exports = BaseObject;