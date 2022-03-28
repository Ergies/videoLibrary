//@@viewOn:imports
import React, { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Popup from "reactjs-popup";
import {Icon} from "uu5g05-elements";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
//@TODO: CSS z itemu ven
function PopupDelete({onDelete, article}){
  function handleDelete(){
    onDelete(article)
  }
  return(
  <Popup
    trigger={ <button> <Icon icon="mdi-delete" /> </button> }
  modal>
    {close => (
  <div style={{
    "background" : "grey",
    "width" : "100%"}}>

    <button className="close" onClick={close} style={{
      "cursor": "pointer",
      "position": "absolute",
      "display": "block",
      "padding": "2px 5px",
      "lineHeight": "20px",
      "right": "-10px",
      "top": "-10px",
      "fontSize": "24px",
      "background": "#ffffff",
      "borderRadius": "18px",
      "border": "1px solid #cfcece"
    }}>
      &times;
    </button>
      <div className="header" style={{
       "width": "100%",
      "border": "5px solid gray",
      "fontSize": "18px",
      "textAlign": "center",
      "padding": "5px"}}>
        Opravdu si prejete zaznam smazat???
      </div>
    <div style={{"textAlign":"center"}}>
    <button onClick={handleDelete}>Ano</button>
    <button className="button" onClick={() => {close();}}>
      Ne
    </button>
    </div>
    </div>)}
    </Popup>
  )}
//@@viewOn:exports
export { PopupDelete };
export default PopupDelete;
//@@viewOff:exports
