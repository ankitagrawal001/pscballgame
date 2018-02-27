// Generated by purs version 0.11.7
"use strict";
var Data_Array = require("../Data.Array");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int_Bits = require("../Data.Int.Bits");
var Data_List = require("../Data.List");
var Neon_Class_HasEqual = require("../Neon.Class.HasEqual");
var Neon_Data = require("../Neon.Data");
var Prelude = require("../Prelude");
var HasOr = function (or) {
    this.or = or;
};
var or = function (dict) {
    return dict.or;
};
var listHasOr = function (dictHasEqual) {
    return new HasOr(function (ys) {
        return function (xs) {
            return Data_List.unionBy(function (x) {
                return function (y) {
                    return Neon_Class_HasEqual.equal(dictHasEqual)(y)(x);
                };
            })(xs)(ys);
        };
    });
};
var intHasOr = new HasOr(function (y) {
    return function (x) {
        return x | y;
    };
});
var functionHasOr = function (dictHasOr) {
    return new HasOr(function (g) {
        return function (f) {
            return function (x) {
                return or(dictHasOr)(g(x))(f(x));
            };
        };
    });
};
var booleanHasOr = new HasOr(function (y) {
    return function (x) {
        return x || y;
    };
});
var arrayHasOr = function (dictHasEqual) {
    return new HasOr(function (ys) {
        return function (xs) {
            return Data_Array.unionBy(function (x) {
                return function (y) {
                    return Neon_Class_HasEqual.equal(dictHasEqual)(y)(x);
                };
            })(xs)(ys);
        };
    });
};
module.exports = {
    or: or,
    HasOr: HasOr,
    arrayHasOr: arrayHasOr,
    booleanHasOr: booleanHasOr,
    functionHasOr: functionHasOr,
    intHasOr: intHasOr,
    listHasOr: listHasOr
};
