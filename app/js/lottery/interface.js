import $ from 'jQuery'; // import引用模块

// 如果不需要对类进行声明，就不需要使用constructor(构造函数)
class Interface {
    /**
     * getOmit 获取遗漏数据
     * @param {string} issue [当前期号] 
     */
    getOmit (issue) {   // 方法没有使用function定义
        let self = this;
        // 这里使用了promise对象和箭头函数的使用
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                dara: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOmit(res.data)
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call(err)
                }
            })
        })
    } //函数后没有','进行分开

    /**
     * [getOpenCode 获取开奖号码]
     * @param {string} issue [期号] 
     */
    getOpenCode (issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                dara: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOpenCode(res.data)
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call(err)
                }
            })
        })
    }

    /**
     * [getState 获取当前状态]
     * @param {string} issue [期号] 
     */
    getState (issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                dara: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call(err)
                }
            })
        })
    }
}

export default Interface