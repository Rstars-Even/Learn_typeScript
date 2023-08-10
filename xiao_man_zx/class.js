// interface Options {
//     el: string | HTMLElement
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dom = /** @class */ (function () {
    function Dom() {
    }
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    //填充文本方法
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    //渲染函数。
    Dom.prototype.render = function (data) {
        var _this = this;
        var _a;
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, (_a = data.text) !== null && _a !== void 0 ? _a : null);
        }
        return root;
    };
    return Dom;
}());
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.prototype.init = function () {
        var data = {
            tag: 'div',
            children: [{
                    tag: 'section',
                    text: '我是子节点一'
                }, {
                    tag: 'section',
                    text: '我是字节点二'
                }],
        };
        var app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data)); //调用父类的方法。
    };
    return Vue;
}(Dom));
new Vue({
    el: "#app"
});
