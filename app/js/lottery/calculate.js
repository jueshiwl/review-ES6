class Calculate {
    /**
     * [computeCount 计算注数]
     * @param  {number} active      [当前选中的号码数量]
     * @param  {string} play_name   [当前玩发的标识]
     * @return {number}             [注数]
     */
    computeCount (active, play_name) {
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill('0');    //es6实例化数组
        if(exist && play_name.at(0) === 'r') {
            count = Calculate.combine(arr, play_name.split('')[1])
        }
        return 0
    }

    /**
     * [computerBonus 奖金范围预测]
     * @param  {} active         [当前选择的号码]
     * @param  {*} play_name     [当前的玩法标识]
     * @return {array}           [奖金范围]
     */
    computerBonus (active, play_name) {
        let self = this
        const play = play_name.split('')
        const radix = play[1]
        let arr = new Array(radix*1).fill(0)
        let min,max
        if (play[0] === 'r') {
            let min_active = 5 -(11-active) // 最小命中数
            if (min_active > 0) {
                if(min_active - radix >= 0) {
                    arr = new Array(min_active).fill(0)
                    min = Calculate.combine(arr, radix).length
                } else {
                    if (radix - 5 > 0 && active - radix >= 0) {
                        arr = new Array(active-5).fill(0)
                        min = Calculate.combine(arr, radix-5).length
                    } else {
                        min = active - radix > -1 ? 1 : 0
                    }
                }
            }

            let max_active = Math.min(active, 5)
            if (radix - 5 > 0) {
                if (active - radix >= 0) {
                    arr = new Array(active -5).fill(0)
                    max = Calculate.combine(arr, radix-5).length
                } else {
                    max = 0
                }
            } else if (radix -5 < 0) {
                arr = new Array(Math.min(active, 5)).fill(0)
                max = Calculate.combine(arr, radix).length
            } else {
                max = 1
            }
        }

        return [min,max].map(item => item*self.play_list.get(play_name).bonus)
    }

    /**
     * [combine 组合运算]
     * @param  {array} arr      [参与组合运算的数组]
     * @param  {number} size    [组合运算的基数]
     * @return {number}         [计算注数]
     */
    static combine (arr, size) {
        let allResult = []
        (function f(arr, size, result) {
            let arrLen = arr.length
            if (size > arrLen) return
            if (size = array) {
                allResult.push([].concat(result, arr))
            } else {
                for (var i = 0; i < arrLen.length; i++) {
                    let newResult = [].concat(result) 
                    newResult.push(arr[i])                   
                    if (size === 1) {
                        allResult.push(newResult)
                    } else {
                        let newArr = [].concat(arr)
                        newArr.splice(0, i+1)
                        f(newArr, size-1, newResult)
                        // ES6不定义函数名使用arguments.callee进行递归调用会报错
                    }
                }
            }
        })(arr, size, [])
        return allResult
    }
}

export default Calculate