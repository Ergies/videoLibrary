//@@viewOn:imports
import Config from "./config/config.js";
import UU5 from "uu5g04";
import "uu5g04-bricks"
import React from "uu5g05";
import PopoverMenu from "./popover-menu";
import UsefulLinks from "./useful-links";
import EditArticle from "./edit-article";
import {GetArticleText} from "./get-article-text";
import PopupDelete from "./popup-delete";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers



// function renderHeader(article){
//   return(
//     <div>
//       {article.name}
//       <UU5.Bricks.Button onClick={handleDelete}/>
//
//
//     </div>
//   )
// }

uu5Tag: Config.TAG + "Home"
let Article = ({article, onDelete}) => {
  //@@viewOn:statics
  //@@viewOff:statics
  //@@viewOn:propTypes
  // propTypes: {
  //   article: UU5.PropTypes.shape({
  //     idc: UU5.PropTypes.string,
  //     name: UU5.PropTypes.string,
  //     videoUrl: UU5.PropTypes.string
  //   })
  //   onDelete: UU5.PropTypes.func;
  // },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  // defaultProps: {
  //   article:null,
  //   onDelete: () => {}
  // },
  function handleDelete(){
    onDelete(article)

  }

  function handleEdit(){
    EditArticle()
  }
  return (

    // <UU5.Bricks.Panel
    //   header={article.idc}
    //   colorSchema="primary"
    //   iconExpanded="mdi-chevron-up"
    //   iconCollapsed="mdi-chevron-down">
      <div style={{justifyContent:"center", alignItems:"center",  float:"left", width:'30%', display:"flex", height:'600px'}} >
        <div>
        <h4>
          {article.name}
        </h4>
          <div>
        <UU5.Bricks.YoutubeVideo disableRelatedVideos={true} disableInfo={true} size = {"xs"} src={article.videoUrl} />
            {/*<Button icon="mdi-delete" variant="primary" onClick={handleDelete} />*/}
            <PopupDelete article={article} onDelete={onDelete}/>
          <PopoverMenu article={article}/>
          </div>
          <GetArticleText key={article.idc} article={article}/>
          <>
          <UsefulLinks key={article.idc} article={article}/>
          </>
        </div>
      </div>
    // </UU5.Bricks.Panel>


  )
  //@@viewOff:defaultProps


}

//@@viewOn:exports
//export { Article };
export default Article;
//@@viewOff:exports
