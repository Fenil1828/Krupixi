import { createContext, useState } from "react";
import runChat from '../config/Gemini'

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prePrompts,SetPrePrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoanding] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index,nextWord) => {
      setTimeout(function (){
        setResultData(prev=>prev+nextWord)
      },75*index)
    }

    const newChat = () => {
      setLoanding(false)
      setShowResult(false)
    }

    const onSent = async (prompt) => {


        setRecentPrompt(prompt);
        setResultData("")
        setLoanding(true);
        setShowResult(true);

        let response1;
        if(prompt != undefined){
          response1 = await runChat(prompt)
          setRecentPrompt(prompt)
        }
        else{
          SetPrePrompts(prev=>[...prev,input])
          setRecentPrompt(input)
          response1 = await runChat(prompt)
        }

        setRecentPrompt(input);
        SetPrePrompts(prev=>[...prev,input])

        let responsArray = response1.split("**");
        let newResponce="";
        for(let i=0; i< responsArray.length;i++){
          if(i == 0 || i%2 !== 1){
              newResponce += responsArray[i];
          }
          else{
            newResponce += "<b>" + responsArray[i]+"</b>";
          }
        }

        let newResponse2 = newResponce.split("*").join("<br>")
        // setResultData(newResponse2)
        let newResponcearray = newResponse2.split(" ");
        for(let i=0;i<newResponcearray.length;i++){
           const nextWord = newResponcearray[i];
           delayPara(i,nextWord+" ")
        }

        setLoanding(false)
        setInput("");
    }

  const contextValue = {
    prePrompts,
    SetPrePrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
