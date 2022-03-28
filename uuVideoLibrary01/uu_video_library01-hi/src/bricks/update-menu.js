//@@viewOn:imports
import {useState} from "uu5g05";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

//Nothing uses this file, ready to delete
function UpdateMenu( wasPressed ){
  const [color, setColor] = useState(wasPressed.color)
  return (setColor((color)=> "blue"))
}

//@@viewOn:exports
export { UpdateMenu };
export default UpdateMenu;
//@@viewOff:exports
