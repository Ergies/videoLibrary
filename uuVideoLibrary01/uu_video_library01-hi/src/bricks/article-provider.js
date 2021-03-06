//@@viewOn:imports
import { useState } from "uu5g05";
//@@viewOff:imports

//@author: Lukas

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

//@TODO: Serverova cast musi vracet 3 - 4 nahodna videa, ze vsech kategorii a vsechna videa pro urcenou kategorii
//@TODO: Dotahnout ktera skupina videi je otevrena
//@TODO: Dotahnout edit

let initAtricles = [
  {
    "idc":"0",
    "name":"Nightwish - Wish I Had An Angel",
    "category" : "",
    "subcategory": "",
    "videoUrl": "https://www.youtube.com/watch?v=wEERFBI9eCg",
    "startTime":"",
    "text":"Moje oblibena pisnicka, kterou dokazu poslouchat dokola a znova a znova.... Nightwish is a Finnish symphonic metal band from Kitee, Finland. The band was formed in 1996 by lead songwriter and keyboardist Tuomas Holopainen, guitarist Emppu Vuorinen, and former lead singer Tarja Turunen.[1] The band soon picked up drummer Jukka Nevalainen, and then bassist Sami Vänskä after the release of their debut album, Angels Fall First (1997). In 2001, Vänskä was replaced by Marko Hietala, who also took over the male vocalist role previously filled by Holopainen or guest singers. ",
    "date" :"",
    "author":"",
    "hasTit":"",
    "lang":"",
    "ulink":"http://www.google.com",
    "linkDescription":"Strejda"
  },
  {
  "idc":"1",
  "name":"Axel F (Official)",
  "videoUrl": "https://www.youtube.com/watch?v=k85mRPqvMbE",
    "text":"Lets do the crazy frooggDing dingA Brem BremA ring ding ding ding ding\n" +
      "A Ring Ding Ding Dingdemgdemg\n" +
      "A ring ding ding ding ding\n" +
      "Ring ding\n" +
      "Baa-BaaRing ding ding ding ding\n" +
      "A Ring Ding Ding Dingdemgdemg\n" +
      "A ring ding ding ding ding\n" +
      "a Bram ba am baba weeeeeeeBREAK DOWN!Ding dingBr-Br-Break Itdum dum dumda dum dum dum dum dumda dum dum dum dum dum dumda dum dumBrem daemdum dum dumda dum dum dum dum dumda dum dum dum dum dum dumda dum dumweeeeeeeeA ram da am da am da am da weeeeeaaaaaaaaaaaaaaaaWh-Whats Going On?ding dingBem De Demding dingda daA ring ding ding ding ding\n" +
      "A Ring Ding Ding Dingdemgdemg\n" +
      "A ring ding ding ding ding\n" +
      "Ring ding\n" +
      "Baa-Baa",
    "ulink":"http://www.seznam.cz",
    "linkDescription":"Seznamovaci seznam"
},
  {
    "idc":"2",
    "name":"All I Ever Wanted",
    "videoUrl": "https://www.youtube.com/watch?v=P3CxhBIrBho",
    "text":"<h1>All I ever</h1> wanted was to see you smiling\n" +
      "I know that I love you\n" +
      "Oh baby why don’t you see\n" +
      "All I ever wanted was to see you smiling\n" +
      "All I ever wanted was to make you mine\n" +
      "I know that I love you\n" +
      "Oh baby why don’t you see\n" +
      "That all I ever wanted was you and me\n" +
      "All I ever wanted was to see you smiling\n" +
      "All I ever wanted was to make you mine\n" +
      "I know that I love you\n" +
      "Oh baby why don’t you see\n" +
      "That all I ever wanted was you and me (you and me)",
    "ulink":"http://www.novinky.cz",
    "linkDescription":"Do NOT click me"
  },
  {
    "idc":"3",
    "name":"Nightwish - Amaranth",
    "videoUrl": "https://www.youtube.com/watch?v=GdZn7k5rZLQ",
    "text":"Baptised with a perfect name\n" +
      "The doubting one by heart\n" +
      "Alone without himselfPokřtěn perfektním jménem\n" +
      "Pochybující svým srdcem\n" +
      "Osamělostí sám bez sebeWar between him and the day\n" +
      "Need some one to blame\n" +
      "In the end, little he can do aloneVálka mezi ním a dnem\n" +
      "Potřebuje na někoho hodit vinu\n" +
      "Nakonec, toho sám zvládne máloYou believe but what you see\n" +
      "You receive but what you giveVěříš, ale co vidíš\n" +
      "Dostáváš, ale co dáváš",
    "ulink":"http://www.unicornuniversity.net",
    "linkDescription":"Unicorn University"
  },
]


function ArticleProvider({children}){

  //@viewOn:hooks
  const [articles, setArticles] = useState(initAtricles)
  //@viewOff:hooks

  function handleDelete(articlesToDelete){
    setArticles((prevArticles) => prevArticles.filter(item=>item.idc !== articlesToDelete.idc))
  }

  return children({articles, handleDelete})
}

//@@viewOn:exports
//export { ArticleProvider };
export default ArticleProvider;
//@@viewOff:exports
