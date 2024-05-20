import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? ( <>
                        <div className="greet">
                            {/* <GradientText children="Hello, Karthik" colors={['#4b90ff', '#4b90ff', '#ff5546']}/> */}
                            <p><span>Hello, User</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Outline an organized & logical sales pitch for a new product</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Find hotels in Recoleta in Buenos Aires, and things to do</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Explain the following code step-by-step in detail</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Come up with a recipe for an upcoming event</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                        </div>
                    </>
                    ):(
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                            ?<div className='loader'>
                                <hr className='hr1'/>
                                <hr className='hr2'/>
                                <hr className='hr3'/>
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                            
                        </div>
                    </div>
                )}


                <div className="main-bottom">
                    <div className="searchbox">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' name="" id="" />
                        <div>
                            {input? null: <img className='hover-img' src={assets.gallery_icon} alt="" />}
                            {input? null: <img className='hover-img'src={assets.mic_icon} alt="" />}
                            {input?<img className='hover-img' onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
