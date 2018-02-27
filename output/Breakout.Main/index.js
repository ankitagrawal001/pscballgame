// Generated by purs version 0.11.7
"use strict";
var Breakout_PlayScreen = require("../Breakout.PlayScreen");
var Breakout_Types = require("../Breakout.Types");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var DOM = require("../DOM");
var Data_Array = require("../Data.Array");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Behavior_Time = require("../FRP.Behavior.Time");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Keyboard = require("../FRP.Event.Keyboard");
var FRP_Event_Time = require("../FRP.Event.Time");
var Halogen_VDom = require("../Halogen.VDom");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Util = require("../PrestoDOM.Util");
var updateGame = function __do() {
    var v = PrestoDOM_Util.getState();
    if (v.currentScreen instanceof Breakout_Types.PlayScreen) {
        return Breakout_PlayScreen.updatePlayScreen();
    };
    if (v.currentScreen instanceof Breakout_Types.GameOverScreen) {
        return Data_Unit.unit;
    };
    if (v.currentScreen instanceof Breakout_Types.YouWinScreen) {
        return Data_Unit.unit;
    };
    throw new Error("Failed pattern match at Breakout.Main line 158, column 3 - line 161, column 30: " + [ v.currentScreen.constructor.name ]);
};
var renderTextScreen = function (content) {
    return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.id_("empty"), PrestoDOM_Properties.width("match_parent"), PrestoDOM_Properties.height("match_parent"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.width("match_parent"), PrestoDOM_Properties.height("20"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.text(content) ]) ]);
};
var renderKey = function (keyId) {
    return function (key) {
        return function (size) {
            return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.id_(keyId), PrestoDOM_Properties.width(Data_Show.show(Data_Show.showInt)(size * 50 | 0)), PrestoDOM_Properties.height("50"), PrestoDOM_Properties.margin("5,5,5,5"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.background("#ddd"), PrestoDOM_Properties.cornerRadius("5") ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.text(key), PrestoDOM_Properties.width("match_parent"), PrestoDOM_Properties.height("20"), PrestoDOM_Properties.gravity("center") ]) ]);
        };
    };
};
var renderGameScreen = function (state) {
    if (state.currentScreen instanceof Breakout_Types.PlayScreen) {
        return Breakout_PlayScreen.renderPlayScreen(state);
    };
    if (state.currentScreen instanceof Breakout_Types.GameOverScreen) {
        return renderTextScreen("Alas! Game Over!");
    };
    if (state.currentScreen instanceof Breakout_Types.YouWinScreen) {
        return renderTextScreen("Howdy! You win!");
    };
    throw new Error("Failed pattern match at Breakout.Main line 61, column 26 - line 66, column 1: " + [ state.currentScreen.constructor.name ]);
};
var world = function (state) {
    return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.id_("container"), PrestoDOM_Properties.width("match_parent"), PrestoDOM_Properties.height("match_parent"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.background("#666") ])([ PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.id_("contentScreen"), PrestoDOM_Properties.width("640"), PrestoDOM_Properties.height("480"), PrestoDOM_Properties.background("#ccc") ])([ renderGameScreen(state), PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.id_("infoPanel"), PrestoDOM_Properties.width("match_parent"), PrestoDOM_Properties.height("match_parent"), PrestoDOM_Properties.margin("10,10,10,10") ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.id_("scoreLabel"), PrestoDOM_Properties.text("Score: " + Data_Show.show(Data_Show.showInt)(state.score)) ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.id_("livesLabel"), PrestoDOM_Properties.text("Lives: " + Data_Show.show(Data_Show.showInt)(state.lives)), PrestoDOM_Properties.width("match_parent"), PrestoDOM_Properties.height("match_parent"), PrestoDOM_Properties.gravity("right") ]) ]) ]), PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.id_("controls"), PrestoDOM_Properties.width("640"), PrestoDOM_Properties.height("70"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.background("#bbb") ])([ renderKey("left")("<")(1), renderKey("launch")("SPACE")(5), renderKey("right")(">")(1) ]) ]);
};
var $$eval = function (v) {
    return Control_Apply.applySecond(Control_Monad_Eff.applyEff)(updateGame)(PrestoDOM_Util.getState);
};
var listen = function __do() {
    var v = FRP_Event.subscribe(FRP_Event_Keyboard.down)(function (key) {
        return Data_Functor["void"](Control_Monad_Eff.functorEff)((function () {
            if (key === 37) {
                return PrestoDOM_Util.updateState("keyLeft")(true);
            };
            if (key === 39) {
                return PrestoDOM_Util.updateState("keyRight")(true);
            };
            if (key === 32) {
                return PrestoDOM_Util.updateState("launched")(true);
            };
            return PrestoDOM_Util.getState;
        })());
    })();
    var v1 = FRP_Event.subscribe(FRP_Event_Keyboard.up)(function (key) {
        return Data_Functor["void"](Control_Monad_Eff.functorEff)((function () {
            if (key === 37) {
                return PrestoDOM_Util.updateState("keyLeft")(false);
            };
            if (key === 39) {
                return PrestoDOM_Util.updateState("keyRight")(false);
            };
            return PrestoDOM_Util.getState;
        })());
    })();
    var behavior = Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))($$eval)(FRP_Behavior_Time.millisSinceEpoch);
    return PrestoDOM_Util.patch(world)(behavior)(FRP_Event_Time.animationFrame)();
};
var main = function __do() {
    PrestoDOM_Util.initializeState();
    var v = PrestoDOM_Util.updateState("paddle")({
        x: 245,
        y: 420,
        w: 150,
        h: 20
    })();
    var v1 = PrestoDOM_Util.updateState("ball")({
        x: 250,
        y: 385,
        w: 20,
        h: 20
    })();
    var v2 = PrestoDOM_Util.updateState("bricks")(Data_Array.concatMap(function (j) {
        return Data_Functor.map(Data_Functor.functorArray)(function (i) {
            return {
                x: (i * 70 | 0) + 10 | 0,
                y: (j * 30 | 0) + 20 | 0,
                w: 60,
                h: 20
            };
        })(Data_Array.range(1)(7));
    })(Data_Array.range(1)(5)))();
    var v3 = PrestoDOM_Util.updateState("keyLeft")(false)();
    var v4 = PrestoDOM_Util.updateState("keyRight")(false)();
    var v5 = PrestoDOM_Util.updateState("launched")(false)();
    var v6 = PrestoDOM_Util.updateState("ballSpeedX")(4)();
    var v7 = PrestoDOM_Util.updateState("ballSpeedY")(-4 | 0)();
    var v8 = PrestoDOM_Util.updateState("score")(0)();
    var v9 = PrestoDOM_Util.updateState("lives")(3)();
    var v10 = PrestoDOM_Util.updateState("currentScreen")(Breakout_Types.PlayScreen.value)();
    var v11 = PrestoDOM_Util.getState();
    PrestoDOM_Util.render(world(v11))(listen)();
    return Data_Unit.unit;
};
module.exports = {
    renderKey: renderKey,
    renderTextScreen: renderTextScreen,
    renderGameScreen: renderGameScreen,
    world: world,
    main: main,
    updateGame: updateGame,
    "eval": $$eval,
    listen: listen
};
