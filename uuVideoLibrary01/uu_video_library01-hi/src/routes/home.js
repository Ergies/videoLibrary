//@@viewOn:imports
import ArticleList from "../bricks/article-list.js";
import ArticleProvider from "../bricks/article-provider.js";
import MainMenu from "../bricks/main-menu";
import React from "uu5g05";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

function Home (){
  return(

    <div>
      <MainMenu/>
      <h3 align={"center"} style={{color:"black"}}>Vítejte ve studentsé aplikaci. Zde vidíte náhodně vybraná videa. Dále můžete vyhledávat videa pomocí kategorií v horní liště, nebo lupy ktera tam jeste neni...</h3>
      <ArticleProvider>
        {( { articles, handleDelete } ) => {
          return (
            <ArticleList articles={articles} onDelete={handleDelete}/>

          )
        }}
      </ArticleProvider>
    </div>
  )

}


//@@viewOn:exports
//export { Home };
export default Home;
//@@viewOff:exports
