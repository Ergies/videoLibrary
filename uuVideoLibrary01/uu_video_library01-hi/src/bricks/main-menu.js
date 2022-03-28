//@@viewOn:imports
import {useRoute} from "uu5g05";
import Config from "./config/config.js";
import React, {useState} from "uu5g05";
import {menuSettings} from "./config/main-menu.config";
import UU5 from "uu5g04";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants

//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css
//@TODO: clean code
//@TODO: search bar, search implementation
//@@viewOn:helpers
// function changeHome(){
//   const [colors, setColors] = useState(home)
//   setColors(() => blue)
//   return colors
//
//   }


//@@viewOff:helpers

// function changeColor(){
//   this.setState({ black: !this.state.black})
// }
function MainMenu(){
  //@viewOn:const
  const [item0Color, setItem0Color] = useState(menuSettings.colors.menuItem0)
  const [item1Color, setItem1Color] = useState(menuSettings.colors.menuItem1)
  const [item2Color, setItem2Color] = useState(menuSettings.colors.menuItem2)
  const [item3Color, setItem3Color] = useState(menuSettings.colors.menuItem3)
  const [item4Color, setItem4Color] = useState(menuSettings.colors.menuItem4)
  const [item5Color, setItem5Color] = useState(menuSettings.colors.menuItem5)
  const [item6Color, setItem6Color] = useState(menuSettings.colors.menuItem6)
  const [, setRoute] = useRoute();
  //@viewOff:const
  function makeAllBlue(obj) {
    Object.keys(obj).forEach(function (key){obj[key] = "blue"});
    return (obj,
        setItem0Color('blue'),
        setItem1Color('blue'),
        setItem2Color('blue'),
        setItem3Color('blue'),
        setItem4Color('blue'),
        setItem5Color('blue'),
        setItem6Color('blue')

    )
  }

  //@viewOn:helpers
  function setItem0(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem0 = "red"
    return (setItem0Color('red'))
  }
  function setItem1(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem1 = "red"
    return (setItem1Color('red'))
  }
  function setItem2(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem2 = "red"
    return (setItem2Color('red'))
  }
  function setItem3(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem3 = "red"
    return (setItem3Color('red'))
  }
  function setItem4(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem4 = "red"
    return (setItem4Color('red'))
  }
  function setItem5(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem5 = "red"
    return (setItem5Color('red'))
  }
  function setItem6(){
    makeAllBlue(menuSettings.colors)
    menuSettings.colors.menuItem6 = "red"
    return (setItem6Color('red'))
  }


  //@viewOff:helpers
  return (



    <UU5.Bricks.NavBar colorSchema="primary">
      <UU5.Bricks.NavBar.Nav>

        <UU5.Bricks.NavBar.Nav.Item colorSchema={item0Color} onClick={()=> {setRoute(menuSettings.routes.menuItem0);setItem0()}}>
        <UU5.Bricks.Icon icon={menuSettings.icons.menuItem0}  />{menuSettings.texts.menuItem0}
        </UU5.Bricks.NavBar.Nav.Item>

        <UU5.Bricks.NavBar.Nav.Item colorSchema={item1Color} onClick={()=> {setRoute(menuSettings.routes.menuItem1);setItem1()}}>
          <UU5.Bricks.Icon icon={menuSettings.icons.menuItem1} />{menuSettings.texts.menuItem1}
        </UU5.Bricks.NavBar.Nav.Item>

        <UU5.Bricks.NavBar.Nav.Item colorSchema={item2Color} onClick={()=> {setRoute(menuSettings.routes.menuItem2);setItem2()}}>
          <UU5.Bricks.Icon icon={menuSettings.icons.menuItem2} />{menuSettings.texts.menuItem2}
        </UU5.Bricks.NavBar.Nav.Item>

        <UU5.Bricks.NavBar.Nav.Item colorSchema={item3Color} onClick={()=> {setRoute(menuSettings.routes.menuItem3);setItem3()}}>
          <UU5.Bricks.Icon icon={menuSettings.icons.menuItem3} />{menuSettings.texts.menuItem3}
        </UU5.Bricks.NavBar.Nav.Item>

        <UU5.Bricks.NavBar.Nav.Item colorSchema={item4Color} onClick={()=> {setRoute(menuSettings.routes.menuItem4);setItem4()}}>
          <UU5.Bricks.Icon icon={menuSettings.icons.menuItem4} />{menuSettings.texts.menuItem4}
        </UU5.Bricks.NavBar.Nav.Item>

        <UU5.Bricks.NavBar.Nav.Item colorSchema={item5Color} onClick={()=> {setRoute(menuSettings.routes.menuItem5);setItem5()}}>
          <UU5.Bricks.Icon icon={menuSettings.icons.menuItem5} />{menuSettings.texts.menuItem5}
        </UU5.Bricks.NavBar.Nav.Item>

        <UU5.Bricks.NavBar.Nav.Item  colorSchema={item6Color} onClick={()=> {setRoute(menuSettings.routes.menuItem6);setItem6()}}>
          <UU5.Bricks.Icon icon={menuSettings.icons.menuItem6} />{menuSettings.texts.menuItem6}
        </UU5.Bricks.NavBar.Nav.Item>

      </UU5.Bricks.NavBar.Nav>
    </UU5.Bricks.NavBar>


  )
}//@@viewOn:exports
export { MainMenu };
export default MainMenu;
//@@viewOff:exports
