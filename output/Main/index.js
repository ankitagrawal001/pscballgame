"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Plus = require("../Control.Plus");
var DOM = require("../DOM");
var DOM_HTML_Event_EventTypes = require("../DOM.HTML.Event.EventTypes");
var Data_Array = require("../Data.Array");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int = require("../Data.Int");
var Data_Lens = require("../Data.Lens");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_String_NonEmpty = require("../Data.String.NonEmpty");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Behavior_Keyboard = require("../FRP.Behavior.Keyboard");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Time = require("../FRP.Event.Time");
var Neon_Class_HasRemainder = require("../Neon.Class.HasRemainder");
var Neon_Operator = require("../Neon.Operator");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Events = require("../PrestoDOM.Events");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var PrestoDOM_Util = require("../PrestoDOM.Util");
var Type_Data_Boolean = require("../Type.Data.Boolean");
var less1 = function (dictOrd) {
    return function (dictSemiring) {
        return function (dictOrd1) {
            return function (dictSemiring1) {
                return function (x) {
                    return function (y) {
                        return function (x1) {
                            return function (y1) {
                                return function (bx1) {
                                    return function (by1) {
                                        return Data_Ord.greaterThanOrEq(dictOrd)(x)(bx1) && (Data_Ord.lessThanOrEq(dictOrd)(x)(Data_Semiring.add(dictSemiring)(bx1)(x1)) && (Data_Ord.greaterThanOrEq(dictOrd1)(y)(by1) && Data_Ord.lessThanOrEq(dictOrd1)(y)(Data_Semiring.add(dictSemiring1)(by1)(y1))));
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var test1 = function (state) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray)(Data_HeytingAlgebra.disj(Data_HeytingAlgebra.heytingAlgebraBoolean))(false)(Data_Array.zipWith(less1(Data_Ord.ordInt)(Data_Semiring.semiringInt)(Data_Ord.ordInt)(Data_Semiring.semiringInt)(state.x)(state.y)(150)(50))([ state.x1, state.x2, state.x3, state.x4, state.x5, state.x6, state.x7, state.x8, state.x9 ])([ 100, 150, 200, 250, 300, 350, 400, 450, 500 ]));
};
var a = function (dictShow) {
    return function (i) {
        return function (j) {
            return PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("" + Data_Show.show(Data_Show.showInt)(i)), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(150)), PrestoDOM_Properties.margin(Data_Show.show(dictShow)(j) + ("," + (Data_Show.show(Data_Show.showInt)(i * 5 | 0) + ",0,0"))), PrestoDOM_Properties.imageUrl("wood") ]);
        };
    };
};
var view = function (state) {
    return PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(675)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(1300)), PrestoDOM_Properties.background("#323232"), PrestoDOM_Properties.name("rootNode") ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,100,0,100"), PrestoDOM_Properties.imageUrl("water1") ]), PrestoDOM_Elements.imageView([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,0,0,575"), PrestoDOM_Properties.imageUrl("sand") ]), PrestoDOM_Elements.imageView([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.margin("0,552,0,0"), PrestoDOM_Properties.imageUrl("sand") ]) ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)(Data_Array.zipWith(a(Data_Show.showInt))([ 20, 30, 40, 50, 60, 70, 80, 90, 100 ])([ state.x1, state.x2, state.x3, state.x4, state.x5, state.x6, state.x7, state.x8, state.x9 ]))([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("circle"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(20)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(20)), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showInt)(state.x) + ("," + (Data_Show.show(Data_Show.showInt)(state.y) + ",0,0"))), PrestoDOM_Properties.imageUrl("ball") ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.text(Data_Show.show(Data_Show.showString)(state.gameMsg)), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.textSize("30") ]) ])));
};
var main = (function () {
    var validate = function (keyLeft) {
        return function (keyRight) {
            return function (keyUp) {
                return function (keyDown) {
                    return function (oldState) {
                        var $6 = oldState.y > 550;
                        if ($6) {
                            return {
                                keyHeld: false,
                                x: oldState.x,
                                y: oldState.y,
                                x1: oldState.x1,
                                x2: oldState.x2,
                                x3: oldState.x3,
                                x4: oldState.x4,
                                x5: oldState.x5,
                                x6: oldState.x6,
                                x7: oldState.x7,
                                x8: oldState.x8,
                                x9: oldState.x9,
                                gameMsg: "you win ",
                                gameOn: false
                            };
                        };
                        var $7 = (test1(oldState) === false || oldState.gameOn) && oldState.y >= 100;
                        if ($7) {
                            return {
                                keyHeld: false,
                                x: 50,
                                y: 50,
                                x1: 20,
                                x2: 20,
                                x3: 20,
                                x4: 20,
                                x5: 20,
                                x6: 20,
                                x7: 20,
                                x8: 20,
                                x9: 20,
                                gameMsg: "some thing is changing",
                                gameOn: true
                            };
                        };
                        if (keyLeft) {
                            return {
                                keyHeld: keyLeft,
                                x: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x + 7 | 0)(1300),
                                y: oldState.y,
                                x2: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x2 + 5 | 0)(1300),
                                x1: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x1 + 2 | 0)(1300),
                                x3: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x3 + 6 | 0)(1300),
                                x4: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x4 + 4 | 0)(1300),
                                x5: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x5 + 5 | 0)(1300),
                                x6: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x6 + 6 | 0)(1300),
                                x7: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x7 + 7 | 0)(1300),
                                x8: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x8 + 6 | 0)(1300),
                                x9: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x9 + 7 | 0)(1300),
                                gameMsg: "Win the game by reaching to the other End",
                                gameOn: false
                            };
                        };
                        if (keyRight) {
                            return {
                                keyHeld: keyRight,
                                x: oldState.x - 7 | 0,
                                y: oldState.y,
                                x2: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x2 + 5 | 0)(1300),
                                x1: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x1 + 2 | 0)(1300),
                                x3: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x3 + 6 | 0)(1300),
                                x4: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x4 + 4 | 0)(1300),
                                x5: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x5 + 5 | 0)(1300),
                                x6: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x6 + 6 | 0)(1300),
                                x7: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x7 + 7 | 0)(1300),
                                x8: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x8 + 6 | 0)(1300),
                                x9: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x9 + 7 | 0)(1300),
                                gameMsg: "Win the game by reaching to the other End",
                                gameOn: false
                            };
                        };
                        if (keyUp) {
                            return {
                                keyHeld: keyUp,
                                x: oldState.x,
                                y: oldState.y - 10 | 0,
                                x2: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x2 + 2 | 0)(1300),
                                x1: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x1 + 2 | 0)(1300),
                                x3: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x3 + 2 | 0)(1300),
                                x4: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x4 + 2 | 0)(1300),
                                x5: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x5 + 2 | 0)(1300),
                                x6: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x6 + 6 | 0)(1300),
                                x7: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x7 + 2 | 0)(1300),
                                x8: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x8 + 2 | 0)(1300),
                                x9: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x9 + 2 | 0)(1300),
                                gameMsg: "Win the game by reaching to the other End",
                                gameOn: false
                            };
                        };
                        if (keyDown) {
                            return {
                                keyHeld: keyDown,
                                x: oldState.x,
                                y: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.y + 10 | 0)(675),
                                x2: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x2 + 3 | 0)(1300),
                                x1: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x1 + 2 | 0)(1300),
                                x3: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x3 + 6 | 0)(1300),
                                x4: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x4 + 5 | 0)(1300),
                                x5: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x5 + 6 | 0)(1300),
                                x6: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x6 + 6 | 0)(1300),
                                x7: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x7 + 2 | 0)(1300),
                                x8: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x8 + 2 | 0)(1300),
                                x9: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x9 + 2 | 0)(1300),
                                gameMsg: "Win the game by reaching to the other End",
                                gameOn: false
                            };
                        };
                        return {
                            keyHeld: false,
                            x: oldState.x,
                            y: oldState.y,
                            x2: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x2 + 5 | 0)(1300),
                            x1: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x1 + 2 | 0)(1300),
                            x3: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x3 + 6 | 0)(1300),
                            x4: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x4 + 4 | 0)(1300),
                            x5: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x5 + 5 | 0)(1300),
                            x6: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x6 + 6 | 0)(1300),
                            x7: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x7 + 7 | 0)(1300),
                            x8: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x8 + 6 | 0)(1300),
                            x9: Neon_Operator._remainder(Neon_Class_HasRemainder.intHasRemainder)(oldState.x9 + 7 | 0)(1300),
                            gameMsg: "Win the game by reaching to the other End",
                            gameOn: false
                        };
                    };
                };
            };
        };
    };
    var initialState = {
        keyHeld: false,
        x: 50,
        y: 50,
        x1: 20,
        x2: 20,
        x3: 20,
        x4: 20,
        x5: 20,
        x6: 20,
        x7: 20,
        x8: 20,
        x9: 20,
        gameMsg: "Win the game by reaching to the other End",
        gameOn: true
    };
    return function __do() {
        var v = PrestoDOM_Util.render(view)(initialState)();
        return Control_Apply.applySecond(Control_Monad_Eff.applyEff)(v.updateState(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(validate)(FRP_Behavior_Keyboard.key(39)))(FRP_Behavior_Keyboard.key(37)))(FRP_Behavior_Keyboard.key(38)))(FRP_Behavior_Keyboard.key(40)))(v.stateBeh))(FRP_Event_Time.animationFrame))(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))();
    };
})();
module.exports = {
    test1: test1,
    less1: less1,
    main: main,
    view: view,
    a: a,
    logAny: $foreign.logAny
};
