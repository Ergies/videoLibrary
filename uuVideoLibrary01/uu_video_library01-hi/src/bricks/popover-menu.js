//@@viewOn:imports
import Config from "./config/config.js";
import React from "uu5g05";
import "uu5g05-forms"
import Popup from "reactjs-popup";
import {Icon} from "uu5g05-elements";
import EditArticle from "./edit-article";
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
function PopoverMenu({article}){
  return(
    <Popup
      trigger={<button> <Icon icon="mdi-pencil" /> </button>}
      modal
    >
      {close => (
        <div className="modal" style={{
          "background" : "grey",
          "width" : "100%",
          "heigth" : "100%"
        }}>
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
          <div className="header" style={{width: "100%",
            border: "5px solid gray",
            "fontSize": "18px",
            "textAlign": "center",
            "padding": "5px"}}>
            Form to edit this article/video will be shown here :-)
            <br/><br/>
            This is just a test of popup window
            <br/><br/>
            The American Broom works :)
            <EditArticle article={article}/>
          </div><br/>
          <div className="content" style={{
            "width": "100%",
            "padding": "10px 5px"
          }}>
          </div>
          <div className="actions" style={{
            "width": "100%",
            "padding": "10px 5px",
            "margin": "auto",
            "textAlign": "center"}}>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
//@@viewOn:exports
export { PopoverMenu };
export default PopoverMenu;
//@@viewOff:exports
