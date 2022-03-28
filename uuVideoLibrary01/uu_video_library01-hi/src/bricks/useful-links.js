//@@viewOn:imports
import Config from "./config/config.js";
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

//@@viewOn:helpers
//@@viewOff:helpers
//get URL Link descriptions
function UsefulLinks({ article }){
  return (
    <UU5.Bricks.Link target="_blank" href={article.ulink}>
      {article.linkDescription}
    </UU5.Bricks.Link>
  )
}
//@@viewOn:exports

export default UsefulLinks;
//@@viewOff:exports
