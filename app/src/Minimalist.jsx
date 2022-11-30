
import './App.css';
import { useState } from 'react';
import './Minimalist.css';
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


export default function Minimalist() {

    const [textarea, setTextarea] = useState("Please provide feedback!")
    const handleChange = (event) => {
        setTextarea(event.target.value)
    }
    
    const [minScale, setminScale] = useState("Neutral")

    const handleSDChange = (event) => {
        setminScale('Strongly Disagree')
    }
    const handleDChange = (event) => {
        setminScale('Disagree')
    }
    const handleNChange = (event) => {
        setminScale('Neutral')
    }
    const handleAChange = (event) => {
        setminScale('Agree')
    }
    const handleSAChange = (event) => {
        setminScale('Strongly Agree')
    }

    const mins = [
        { title: 'Strongly Disagree', changer: handleSDChange, unselectedURL: 'https://i.imgur.com/0STqIbc.png', scale: 'negative', id: 1 },
        { title: 'Disagree', changer: handleDChange, unselectedURL: 'https://i.imgur.com/oialJkB.png', scale: 'negative', id: 2 },
        { title: 'Neutral', changer: handleNChange, unselectedURL: 'https://i.imgur.com/Tqdx80v.png', scale: 'neutral', id: 3 },
        { title: 'Agree', changer: handleAChange, unselectedURL: 'https://i.imgur.com/zZFKs5s.png', scale: 'positive', id: 4 },
        { title: 'Strongly Agree', changer: handleSAChange, unselectedURL: 'https://i.imgur.com/PQOTCHE.png', scale: 'positive', id: 5 },
    ];
    const minLabels = mins.map(min =>
        
        <li className="minimalistlabels" key={min.id}>
            {min.title}
        </li>
        )

    const minTitles = mins.map(min =>
        <>
        <label className='minimalist'>
        <input type='radio' name='min' value={minScale === min.title} onChange={min.changer} key={min.id} id={min.id} />
        </label>
        </>
    )
    console.log(minScale + "hi")
    
    const clickedState = minScale 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({textarea})
        console.log({minScale})
        alert('Thank you for submitting your feedback!')
        }
    
        
    
        
        
        return (
        <div className ="form-box3">
            <form onSubmit={handleSubmit}>
                <h1>
                    I had a positive learning experience today.
                </h1>
                <label>
                {minLabels}
                </label>
                <ul>
                {minTitles}
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
        
    // export default min;