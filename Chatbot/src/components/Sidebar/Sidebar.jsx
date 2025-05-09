import React, { useContext, useState } from "react";
import "./Sidebar.css";
import menu from "../../assets/menu.svg"
import plus from "../../assets/plus.svg"
import chat from "../../assets/chat.svg"
import help from "../../assets/help.svg"
import activity from "../../assets/recent.png"
import setting from "../../assets/settings.svg"
import { Context } from "../../contect/context";

const Sidebar = () => {

    const [extendend,setExtendend] = useState(false);
    const {onSent,prePrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadprompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
    }

  return (
    <div className="sidebar">

      <div className="top">
        <img onClick={()=>setExtendend(prev=>!prev)}  src={menu} className="menu" alt="" />

        <div onClick={()=>newChat()} className="new-chat">
          <img src={plus} alt="" />
          {extendend?<p>New Chat</p>:null}
        </div>

        {extendend?
        <div className="recent">
          <p className="recent-title">Recent</p>

          {prePrompts.map((item,index) => {
            return(
                <div onClick={ ()=> loadprompt(item)}  className="recent-Entry recent123">
                <img src={chat} alt="" />
                <p>{item.slice(0,22)} ...</p>
          </div>
            )
          })}

        
        </div>
        : null}

      </div>
    
      <div className="bottom">

        <div className="bottom-item recent-Entry">
            <img src={help} alt="" />
            {extendend?<p>Help</p>:null}
        </div>

        <div className="bottom-item recent-Entry">
            <img src={activity} alt="" />
            {extendend?<p>Activity</p>:null}
        </div>

        <div className="bottom-item recent-Entry">
            <img src={setting} alt="" />
            {extendend?<p>Settings</p>:null}
        </div>

        

      </div>

    </div>
     
  );
};

export default Sidebar;
