import React, { useContext } from 'react'
import './Main.css'
import user from "../../assets/user.jpeg"
import bulb from "../../assets/bulb.svg"
import compass from "../../assets/compass.png"
import msg from "../../assets/msg.svg"
import code from "../../assets/code.png"
import gallary from "../../assets/gallary.svg"
import mike from "../../assets/mike.png"
import send from "../../assets/send.svg"
import { Context } from '../../contect/context'
import k from "../../assets/k.png"

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Krupixi</p>
            <img src={user} className='user' alt="" />
        </div>

        <div className="main-container">
            
            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello Jee!</span></p>
                <p className='parah' >How Can I Help You Today?</p>
            </div>
            
            <div className="cards">
                
                {/* card 1 */}
                <div className="card">
                    <p>Suggest Beautiful Places To See On An Upcoming Road Trip</p>
                    <img src={compass} alt="" />
                </div>
            
                {/* card 2 */}
                <div className="card">
                    <p>Briefly Summarize This Concept: Urban Planning</p>
                    <img src={bulb} alt="" />
                </div>

                {/* card 3 */}
                <div className="card">
                    <p>Brainstrom Team Bonding Activities For Our Work Retreat</p>
                    <img src={msg} alt="" />
                </div>

                {/* card 4 */}
                <div className="card">
                    <p>Improve The Readability Of The Following Code</p>
                    <img src={code} alt="" />
                </div>
            </div>
            </>
            : <div className="result">
               <div className="result-title">
                <img src={user} alt="" />
                <p>{recentPrompt}</p>
               </div>
               <div className="result-data">
                <img className='kuser' src={k} alt="" />
                {loading?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                :
                    <p dangerouslySetInnerHTML={{__html:resultData}} ></p>
                }
                
               </div>
            </div>
            }


            <div className="main-bottom">
                <div className="searchbox">
                    <input onChange={(e)=>setInput(e.target.value)}
                    value={input}
                    type="text" name="" id="" placeholder='Ask Krupixi' />
                    <div>
                        <img src={gallary} alt="" />
                        <img src={mike} alt="" />
                        {input?<img onClick={()=>onSent(input)} src={send} alt="" />:null}
                    </div> 
                </div>
                <p className='bottom-info'>
                Krupixi May Display Inaccurate Info, Including About People, So Double-Check its Responses. Your Privacy And Gemini Apps.
                </p>
            </div>

        </div>

    </div>
  )
}

export default Main
