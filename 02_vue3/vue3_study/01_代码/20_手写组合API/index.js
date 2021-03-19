// shallowReactive(浅的劫持 浅的监视 浅的响应式数据)和reactive(深的)

// 定义一个reactiveHandler处理对象
const reactiveHandler = {
    // 获取属性值
    get(target, prop) {
        if (prop === '_is_reactive') return true //标识当前对象是reactive对象
        console.log("拦截到了读取对象。。。", target, prop);
        return Reflect.get(target, prop)
    },
    // 修改属性值或者添加属性
    set(target, prop, value) {
        console.log("拦截到了修改数据或添加属性。。。", target, prop, value);
        return Reflect.set(target, prop, value)
    },
    // 删除某个属性
    deleteProperty(target, prop) {
        console.log("拦截到了删除数据。。。", target, prop);
        return Reflect.deleteProperty(target, prop)
    }
}

// 定义一个shallowReactive函数 传入一个目标对象
function shallowReactive(target) {
    // 判断当前目标对象是不是object类型(对象/数组)
    if (target && typeof target === "object") {
        return new Proxy(target, reactiveHandler)
    }
    // 如果是基本数据类型 直接返回
    return target
}

// 定义一个reactive函数 传入一个目标对象
function reactive(target) {
    // 判断当前目标对象是不是object类型(对象/数组)
    if (target && typeof target === "object") {
        // 对数组或者对象中的所有数据进行reactive的递归处理
        //先判断当前数据是不是数组
        if (Array.isArray(target)) {
            // 数组的数据要进行遍历操作
            target.forEach((item, index) => {
                // console.log(item, index);
                target[index] = reactive(item)
            })
        } else {
            //再判断当前数据是不是对象
            // 对象的数据越想越遍历操作
            Object.keys(target).forEach(key => {
                target[key] = reactive(target[key])
            })
        }

        return new Proxy(target, reactiveHandler)
    }
    // 如果是基本数据类型 直接返回
    return target
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 */
// shallowReadonly 和 readonly
// 定义一个readonlyHandler处理对象
const readonlyHandler = {
    // 获取属性值
    get(target, prop) {
        if (prop === '_is_readonly') return true //标识当前对象是readonly对象
        console.log("拦截到了读取对象。。。", target, prop);
        return Reflect.get(target, prop)
    },
    // 修改属性值或者添加属isReactive(obj) ||isReadonly(obj)
    set(target, prop, value) {
        console.warn("只读数据不能修改或者添加数据。。。");
        return true
    },
    // 删除某个属性
    deleteProperty(target, prop) {
        console.warn("只能读取数据不能删除数据。。。");
        return true
    }
}

// 定义一个shallowReadonly函数 传入一个目标对象
function shallowReadonly(target) {
    // 判断当前目标对象是不是object类型(对象/数组)
    if (target && typeof target === "object") {
        return new Proxy(target, readonlyHandler)
    }
    // 如果是基本数据类型 直接返回
    return target
}

// 定义一个readonly函数 传入一个目标对象
function readonly(target) {
    // 判断当前目标对象是不是object类型(对象/数组)
    if (target && typeof target === "object") {
        // 对数组或者对象中的所有数据进行readonly的递归处理
        //先判断当前数据是不是数组
        if (Array.isArray(target)) {
            // 数组的数据要进行遍历操作
            target.forEach((item, index) => {
                // console.log(item, index);
                target[index] = readonly(item)
            })
        } else {
            //再判断当前数据是不是对象
            // 对象的数据越想越遍历操作
            Object.keys(target).forEach(key => {
                target[key] = readonly(target[key])
            })
        }

        return new Proxy(target, readonlyHandler)
    }
    // 如果是基本数据类型 直接返回
    return target
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 */


// 定义一个shallowRef函数
function shallowRef(target) {
    return {
        _value: target,
        get value() {
            console.log("劫持到了读取数据。。。");
            return this._value
        },
        set value(val) {
            console.log("劫持到了修改数据。。。", val);
            this._value = val
        }
    }

}
// 定义一个Ref函数
function ref(target) {
    target = reactive(target)
    return {
        _is_ref: true, //标识当前对象是ref对象
        _value: target,
        get value() {
            console.log("劫持到了读取数据。。。");
            return this._value
        },
        set value(val) {
            console.log("劫持到了修改数据。。。", val);
            this._value = val
        }
    }

}

// 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

// 定义一个函数 isRef 判断当前对象是不是ref对象
function isRef(obj) {
    return obj && obj._is_ref
}
// 定义一个函数 isReactive 判断当前对象是不是reactive对象
function isReactive(obj) {
    return obj && obj._is_reactive
}
// 定义一个函数 isReadonly 判断当前对象是不是readonly对象
function isReadonly(obj) {
    return obj && obj._is_readonly
}
// 定义一个函数 isPoxy 判断当前对象是不是reactive或者readonly对象
function isPoxy(obj) {
    return isReactive(obj) || isReadonly(obj)
}