
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


export default function Numeric() {

    const [textarea, setTextarea] = useState("Please provide feedback!")
    const handleChange = (event) => {
        setTextarea(event.target.value)
    }
    
    const [numScale, setnumScale] = useState("Neutral")

    const handleSDChange = (event) => {
        setnumScale('Strongly Disagree')
    }
    const handleDChange = (event) => {
        setnumScale('Disagree')
    }
    const handleNChange = (event) => {
        setnumScale('Neutral')
    }
    const handleAChange = (event) => {
        setnumScale('Agree')
    }
    const handleSAChange = (event) => {
        setnumScale('Strongly Agree')
    }

    const nums = [
        { title: 'Strongly Disagree', changer: handleSDChange, unselectedURL: 'https://i.imgur.com/0STqIbc.png', scale: 'negative', id: 1 },
        { title: 'Disagree', changer: handleDChange, unselectedURL: 'https://i.imgur.com/oialJkB.png', scale: 'negative', id: 2 },
        { title: 'Neutral', changer: handleNChange, unselectedURL: 'https://i.imgur.com/Tqdx80v.png', scale: 'neutral', id: 3 },
        { title: 'Agree', changer: handleAChange, unselectedURL: 'https://i.imgur.com/zZFKs5s.png', scale: 'positive', id: 4 },
        { title: 'Strongly Agree', changer: handleSAChange, unselectedURL: 'https://i.imgur.com/PQOTCHE.png', scale: 'positive', id: 5 },
    ];
    const numLabels = nums.map(num =>
        <li className="numlabels" key={num.id}>
            {num.title}
        </li>
        )

    const numTitles = nums.map(num =>
        <>
        <input className='input-hidden' type='radio' name='num' value={numScale === num.title} onChange={num.changer} key={num.id} id={num.id} />
        <label className="num" for={num.id}>
            <img src={num.unselectedURL} alt={num.title}/>     
        </label>
        </>
    )
    console.log(numScale + "hi")
    
    const clickedState = numScale 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({textarea})
        console.log({numScale})
        alert('Thank you for submitting your feedback!')
        }
    
        
    
        
        
        return (
        <div className ="form-box2">
            <form onSubmit={handleSubmit}>
                <h1>
                    I had a positive learning experience today.
                </h1>
                <label>
                {numLabels}
                </label>
                <ul className="num">
                {numTitles}
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
        
    // export default num;