// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://zhsjk.e21.cn/zhsjk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=e21.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = document.getElementsByClassName('red12'); for(var i=0; i<a.length; i++){if(a[i].text=='添加'){window.location.href = a[i].href}}
    document.getElementById('advice').value = '该实践活动选材贴近现实，资料真实可靠，研究内容有深度，实践结果价值突出，学生表现十分优秀！'
    document.getElementById('btnSave').click()
    // Your code here...
})();
