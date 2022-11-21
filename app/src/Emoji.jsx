import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from "react-hook-form";
import { useState } from 'react';
import './Form.css';
import {RadioGroup, Radio} from 'react-radio-group';
// handle click for 6 components
const emojis = [
    { title: 'Strongly Disagree', unselectedURL: 'https://i.imgur.com/zLsiG5u.png', scale: 'negative', id: 1 },
    { title: 'Disagree', unselectedURL: 'https://i.imgur.com/vL0Xmfb.png', scale: 'negative', id: 2 },
    { title: 'Neutral', unselectedURL: 'https://i.imgur.com/7ODOTeB.png', scale: 'neutral', id: 3 },
    { title: 'Agree', unselectedURL: 'https://i.imgur.com/NVkBB13.png', scale: 'positive', id: 4 },
    { title: 'Strongly Agree', unselectedURL: 'https://i.imgur.com/l8J9GIk.png', scale: 'positive', id: 5 },
];
function Emoji() {
    // const [value, setValue] = useState(selectedValue);
    // function handleChange(){
    //     setValue(this.state.selectedValue);
    // }
    const emojiTitles = emojis.map(emoji =>
        <li className="title" key={emoji.id}>
            {emoji.title}
        </li>)
    const emojiOptions = emojis.map(emoji =>
        <radio name="emoji" className="emoji" key={emoji.id} value={emojis.title}>
            <img src={emoji.unselectedURL}/>
        </radio>
    );
    // will make conditional "selectedURL" emojis tomorrow that will appear when count >1
        return(
            <div>
                <label className='inline'>
                    {emojiTitles}
                </label>
                <ul className="inline">
                <RadioGroup name="emoji" >
                {/* selectedValue={this.state.selectedValue} onChange={this.handleChange} */}
                    {emojiOptions}
                </RadioGroup>
                </ul>
            {/* <ModularFeedback count={count} /> */}
            
            </div>
        );
}
function SubmitButton(submit, onClick) {
    
    return(
        <button className="button" type="submit">
            {submit === 'Submitted' ? ('Submitted') :('Submit')}
            {/* {alert('Thank you for clicking submit!')} */}
        </button>
    )
}
function ModularFeedback(count) {
    const feelings = emojis.scale 
    function FeedbackText() {
        switch(count === 1) {
            case (feelings === 'negative'):
                return "How can we resolve your current unease?";
            case (feelings=== 'neutral'):
                return "What can we do to make your experience positive?"
            case (feelings === 'positive'):
                return "We're glad you enjoyed it! What was one highlight for you?"
            }
        }
    return (
        <div>
            {count === 1 ? (<h2 className="feedback" FeedbackText/>) : (<h2 className="feedback"> Let us know if you have any specific feedback!</h2>)}
        </div>
    )

}
    // if switch isn't the right route here is conditional                    
    // const feedback = if(count > 0) {
    //                     if(emojis.scale === 'negative') {
    //                         "What could we do different to prevent your unease?"
    //                         } else if(emojis.scale === 'neutral') {
    //                             "What can we do to make your experience positive?"
    //                         } else {
    //                             "We're glad you enjoyed it! What was one highlight for you?"
    //                         }
    //                     } else {"Let us know if you have any specific feedback!"}

export default function Form() {
    // const { submit, handleSubmit } = useForm();
    // const onSubmit = (submit);
    // function handleClick(){
    //     setSubmit(submit = 'Submitted');
    //     alert(submit, 'thank you!' );
    
    return(
        <div className ="form-box">
            <form>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <h1>
                I had a positive learning experience today.
            </h1>
            <Emoji/>
            <label>
            <ModularFeedback/>
            <textarea name="body"/>
            {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
            </label>
            <SubmitButton />
            </form>
        </div>
    );
    }