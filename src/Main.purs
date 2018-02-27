module Main where

import Data.Maybe

import Prelude
import PrestoDOM.Core
import PrestoDOM.Elements
import PrestoDOM.Events
import PrestoDOM.Properties
import PrestoDOM.Types
import Data.Maybe(fromMaybe)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log, logShow)
import Control.Plus ((<|>))
import DOM (DOM)
import DOM.HTML.Event.EventTypes (keydown)
import Data.Lens ((^.))
import Data.Array (zipWith)
import Data.String (length)
import Data.String.NonEmpty (toString)
import FRP (FRP)
import FRP.Behavior (Behavior, sample_)
import FRP.Behavior.Keyboard (key)
import FRP.Event (Event, subscribe)
import FRP.Event.Time (animationFrame)
import Neon.Operator ((%))
import PrestoDOM.Util (getBeh, getEvent, logNode, render, updateState)
import PrestoDOM.Util as U
import Type.Data.Boolean (kind Boolean)
import Data.Foldable (foldl)
import Data.Int(fromNumber)

foreign import logAny :: forall a. a -> Unit

-- type Action =
--   { loginTextChange :: Dynamic String
--   , passTextChange :: Dynamic String
--   , submitClick :: Dynamic Boolean
--   }

type State =
  {
    keyHeld :: Boolean
    ,x :: Int
    ,y :: Int
    ,x1 :: Int
    ,x2 :: Int
    ,x3 :: Int
    ,x4 :: Int
    ,x5 :: Int
    ,x6 :: Int
    ,x7 :: Int
    ,x8 :: Int
    ,x9 :: Int
    ,gameMsg :: String
    ,gameOn ::Boolean
  }


test1 :: State -> Boolean
test1 state = foldl (||) false (zipWith (less1 state.x state.y 150 50) [state.x1,state.x2,state.x3, state.x4, state.x5,state.x6,state.x7,state.x8,state.x9] [100,150,200,250,300,350,400,450,500])


less1 x y x1 y1 bx1 by1 = (x>=bx1) && (x<=bx1+x1) && (y>=by1) && (y<=by1+y1)

main :: forall eff. Eff ( console :: CONSOLE, frp :: FRP, dom :: DOM | eff ) Unit
main = do
    let initialState = { keyHeld: false , x : 50 , y : 50 ,x1:20,x2:20,x3:20,x4:20,x5:20,x6:20,x7:20,x8:20,x9:20,gameMsg:"Win the game by reaching to the other End",gameOn:true}
    { stateBeh, updateState } <-
      render view initialState
    updateState
      (validate <$> key 39 <*> key 37 <*> key 38 <*> key 40 <*> stateBeh)
      (animationFrame)
      *> pure unit
  where
      d = 2

      validate :: Boolean -> Boolean -> Boolean -> Boolean -> State -> State
      validate keyLeft keyRight keyUp keyDown oldState =
        if oldState.y > 550
          then
              { keyHeld: false , x : oldState.x , y : oldState.y ,x1:oldState.x1,x2:oldState.x2,x3:oldState.x3,x4:oldState.x4,x5:oldState.x5,x6:oldState.x6,x7:oldState.x7,x8:oldState.x8,x9:oldState.x9,gameMsg:"you win ",gameOn:false}
          else
             if ((test1 oldState)==false || oldState.gameOn) && oldState.y >=100
                then
                 { keyHeld: false , x : 50 , y : 50 ,x1:20,x2:20,x3:20,x4:20,x5:20,x6:20,x7:20,x8:20,x9:20,gameMsg:"some thing is changing",gameOn:true}

                else
                   if keyLeft
                      then
                          { keyHeld : keyLeft ,x : (oldState.x + 7)%1300,y :oldState.y ,x2:(oldState.x2+5)%1300,x1:(oldState.x1+2)%1300,x3:(oldState.x3+6)%1300,x4:(oldState.x4+4)%1300,x5:(oldState.x5+5)%1300,x6:(oldState.x6+6)%1300,x7:(oldState.x7+7)%1300,x8:(oldState.x8+6)%1300,x9:(oldState.x9+7)%1300,gameMsg:"Win the game by reaching to the other End",gameOn:false}
                      else
                        if keyRight
                           then
                             { keyHeld : keyRight ,x : (oldState.x - 7),y : oldState.y ,x2:(oldState.x2+5)%1300,x1:(oldState.x1+2)%1300,x3:(oldState.x3+6)%1300,x4:(oldState.x4+4)%1300,x5:(oldState.x5+5)%1300,x6:(oldState.x6+6)%1300,x7:(oldState.x7+7)%1300,x8:(oldState.x8+6)%1300,x9:(oldState.x9+7)%1300,gameMsg:"Win the game by reaching to the other End",gameOn:false  }
                           else
                             if keyUp
                                then
                                  {keyHeld : keyUp,x:oldState.x ,y:(oldState.y-10),x2:(oldState.x2+d)%1300,x1:(oldState.x1+d)%1300,x3:(oldState.x3+d)%1300,x4:(oldState.x4+d)%1300,x5:(oldState.x5+d)%1300,x6:(oldState.x6+6)%1300,x7:(oldState.x7+d)%1300,x8:(oldState.x8+d)%1300,x9:(oldState.x9+d)%1300,gameMsg:"Win the game by reaching to the other End",gameOn:false}
                                else
                                   if keyDown
                                      then {keyHeld : keyDown,x : oldState.x ,y:(oldState.y+10)%675 ,x2:(oldState.x2+3)%1300,x1:(oldState.x1+2)%1300,x3:(oldState.x3+6)%1300,x4:(oldState.x4+5)%1300,x5:(oldState.x5+6)%1300,x6:(oldState.x6+6)%1300,x7:(oldState.x7+d)%1300,x8:(oldState.x8+d)%1300,x9:(oldState.x9+d)%1300,gameMsg:"Win the game by reaching to the other End",gameOn:false}
                                      else

                                          {keyHeld :false,x : oldState.x ,y:oldState.y ,x2:(oldState.x2+5)%1300,x1:(oldState.x1+2)%1300,x3:(oldState.x3+6)%1300,x4:(oldState.x4+4)%1300,x5:(oldState.x5+5)%1300,x6:(oldState.x6+6)%1300,x7:(oldState.x7+7)%1300,x8:(oldState.x8+6)%1300,x9:(oldState.x9+7)%1300,gameMsg:"Win the game by reaching to the other End",gameOn:false}
view :: forall w i. State
  -> PrestoDOM i w
view state =
  relativeLayout
    [ height $ V 675
    , width $ V 1300
    , background "#323232"
    , name "rootNode"
    ]
    ([imageView[height Match_Parent, width Match_Parent,margin "0,100,0,100", imageUrl "water1"],imageView[height Match_Parent, width Match_Parent,margin "0,0,0,575", imageUrl "sand"],imageView[height Match_Parent, width Match_Parent,margin "0,552,0,0", imageUrl "sand"]]<>zipWith a [20,30,40,50,60,70,80,90,100] [state.x1,state.x2,state.x3,state.x4,state.x5,state.x6,state.x7,state.x8,state.x9]<>[ imageView
       [ id_ "circle"
       ,height $ V 20
       , width $ V 20
       --, background "#FFFFFF"
       , margin ((show  state.x) <> "," <> (show state.y)<> ",0,0")
       --, cornerRadius "200"
       ,imageUrl "ball"
       ],textView
          [ width Match_Parent
          , height $ V 40
          , text $ show state.gameMsg
          , gravity "center"
          , textSize "30"
          ]])


a i j= imageView
      [
      id_ (""<>show i)
      ,height $ V 50
      , width $ V 150
      , margin ((show j)<>","<>(show $ i*5)<>",0,0")
      , imageUrl "wood"
      ]
