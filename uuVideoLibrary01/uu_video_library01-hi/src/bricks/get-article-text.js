//@@viewOn:imports
import React from "uu5g05";
import Config from "./config/config.js";
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
//@TODO: iterace vice url oddelenych ";"
function GetArticleText ({article}){
  return(
    <div dangerouslySetInnerHTML={{__html: article.text}} style={{width:'350px'}}/>
  )}
//@@viewOn:exports
export { GetArticleText };
export default GetArticleText;
//@@viewOff:exports
