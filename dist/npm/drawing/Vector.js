'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = require('./Path');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
    function Vector(x, y) {
        _classCallCheck(this, Vector);

        this.type = _Path.PATH.VECTOR;
        this.x = x;
        this.y = y;
        if (process.env.NODE_ENV !== 'production') {
            if (isNaN(x)) {
                console.error('Invalid x value given for Vector');
            }
            if (isNaN(y)) {
                console.error('Invalid y value given for Vector');
            }
        }
    }

    _createClass(Vector, [{
        key: 'addX',
        value: function addX(x) {
            return new Vector(this.x + x, this.y);
        }
    }, {
        key: 'addY',
        value: function addY(y) {
            return new Vector(this.x, this.y + y);
        }
    }, {
        key: 'subtractX',
        value: function subtractX(x) {
            return this.addX(-x);
        }
    }, {
        key: 'subtractY',
        value: function subtractY(y) {
            return this.addY(-y);
        }
    }]);

    return Vector;
}();

exports.default = Vector;