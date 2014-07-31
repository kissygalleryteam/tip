/**
 * @fileoverview
 * @author
 * @module tip
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Tip
     * @constructor
     * @extends Base
     */
    function Tip(comConfig) {
        var self = this;
        //调用父类构造函数
        Tip.superclass.constructor.call(self, comConfig);
    }
    S.extend(Tip, Base, /** @lends Tip.prototype*/{

    }, {ATTRS : /** @lends Tip*/{

    }});
    return Tip;
}, {requires:['node', 'base']});



