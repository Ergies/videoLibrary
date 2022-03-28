//@@viewOn:imports
import {EditArticleForm} from "./edit-article-form";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers
//@TODO: Kontrola upravenych clanku
function EditArticle({article}) {
  // @viewOn:hooks

  // @viewOff:hooks

  // @viewOn:private

  // @viewOff:private

  // @viewOn:render
  return <EditArticleForm article={article}/>
}

  // @viewOff:render


//@@viewOn:exports
export { EditArticle };
export default EditArticle;
//@@viewOff:exports
