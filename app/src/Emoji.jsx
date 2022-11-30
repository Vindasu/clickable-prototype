
import './App.css';
import { useState } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.css';

function ModularFeedback({clickedState}) {
    console.log(clickedState + " child data")            
    const unhappy = "How can we resolve your current unease?"
    const neutral = "What can we do to make your experience positive?"
    const happy = "We're glad you enjoyed it! What was one highlight for you?"
    if (clickedState === "Strongly Disagree" || clickedState === "Disagree") {
            return unhappy;
    }
        
    if (clickedState === "Strongly Agree" || clickedState === "Agree") {
            return happy;
    }

    else {
            return neutral;
    } 
}


export default function Emoji() {

    const [textarea, setTextarea] = useState("Please provide feedback!")
    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    const [emojiScale, setEmojiScale] = useState("Neutral")

    const handleSDChange = (event) => {
        setEmojiScale('Strongly Disagree')
    }
    const handleDChange = (event) => {
        setEmojiScale('Disagree')
    }
    const handleNChange = (event) => {
        setEmojiScale('Neutral')
    }
    const handleAChange = (event) => {
        setEmojiScale('Agree')
    }
    const handleSAChange = (event) => {
        setEmojiScale('Strongly Agree')
    }

    const emojis = [
        { title: 'Strongly Disagree', changer: handleSDChange, unselectedURL: 'https://i.imgur.com/zLsiG5u.png', scale: 'negative', id: 1 },
        { title: 'Disagree', changer: handleDChange, unselectedURL: 'https://i.imgur.com/vL0Xmfb.png', scale: 'negative', id: 2 },
        { title: 'Neutral', changer: handleNChange, unselectedURL: 'https://i.imgur.com/7ODOTeB.png', scale: 'neutral', id: 3 },
        { title: 'Agree', changer: handleAChange, unselectedURL: 'https://i.imgur.com/NVkBB13.png', scale: 'positive', id: 4 },
        { title: 'Strongly Agree', changer: handleSAChange, unselectedURL: 'https://i.imgur.com/l8J9GIk.png', scale: 'positive', id: 5 },
    ];
    const emojiLabels = emojis.map(emoji =>
        <li className="emojilabels" key={emoji.id}>
            {emoji.title}
        </li>
        )

    const emojiTitles = emojis.map(emoji =>
        <>
        <input className='input-hidden' type='radio' name='emoji' value={emojiScale === emoji.title} onChange={emoji.changer} key={emoji.id} id={emoji.id} />
        <label className="emoji" for={emoji.id}>
            <img src={emoji.unselectedURL} alt={emoji.title}/>     
        </label>
        </>
    )
    console.log(emojiScale + "hi")
    
    const clickedState = emojiScale 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({textarea})
        console.log({emojiScale})
        alert('Thank you for submitting your feedback!')
        }
    
        
    
        
        
        return (
        <div className ="form-box">
            <form onSubmit={handleSubmit}>
                <h1>
                    I had a positive learning experience today.
                </h1>
                <label className="emojilabeltag">
                {emojiLabels}
                </label>
                <ul className="emoji">
                {emojiTitles}
                </ul>
                <label className="feedback">
                <ModularFeedback clickedState={clickedState}/>
                </label>
                <textarea value={textarea} onChange={handleChange} />
                <input type="submit"/>
            </form>
        </div>
        );
        }
        
    // export default Emoji;