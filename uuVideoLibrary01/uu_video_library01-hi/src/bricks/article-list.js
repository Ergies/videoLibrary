//@@viewOn:imports
import Article from "./article";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css

//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

function ArticleList({articles, onDelete}) {
  if(articles.length === 0){
    //return <UU5.Common.Error content="Nothing to show"/>
    console.log("nothing to show")
  }
  return(
    <>
      {articles.map(article => {
        return <Article key={article.idc} article={article} onDelete={onDelete} />
      })}
    </>
  )
  //@@viewOff:render
}

//@@viewOn:exports
export { ArticleList };
export default ArticleList;
//@@viewOff:exports
