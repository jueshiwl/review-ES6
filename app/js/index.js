/*
* @Author: huchunhui
* @Date:   2017-06-01 10:41:57
* @Last Modified by:   huchunhui
* @Last Modified time: 2017-06-01 11:42:45
*/

'use strict';

class Test {
	constructor () {
		this.a = "hello world"
	}
}

let test = new Test();

document.body.innerHTML = test.a;