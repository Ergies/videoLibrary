//@@viewOn:imports
import Config from "./config/config.js";
import React from "uu5g05";
import "uu5g05-forms"
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

function EditArticleForm({article}){
  //@TODO add all the way to article-provider && save changes in article
  function handleSubmit() {
    alert(article.text)
    article.name = form.name.value
    article.text = form.text.value
    article.ulink = form.url.value
    console.log(article.name)
    console.log(article.text)
    console.log(article.ulink)
    alert(article.text)

  }
  function handleChange(){
    // console.log(article.name)
    // console.log(form.name.value)

  }
  return(
    <div style={{"textAlign":"left"}}>
      <form name="form" onSubmit={handleSubmit} style={{"align":"left"}}>
        <label>
          Name:<br/>
          <input type="text" name="name" defaultValue={article.name} onChange={handleChange}/>
        </label>
        <br/>
        <label>
          Text:<br/>
          <textarea type="textarea" name="text" defaultValue={article.text}/>
        </label>
        <br/>
        <label>
          URL:<br/>
          <input type="text" name="url" defaultValue={article.ulink}/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
//@@viewOn:exports
export { EditArticleForm };
export default EditArticleForm;
//@@viewOff:exports
