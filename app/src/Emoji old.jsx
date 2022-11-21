// import React from "react"
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import {useForm} from "react-hook-form";
// // handle click for 6 components
// function Form() {
//     const {register, handleSubmit} = useForm();

//     function onSubmitButton(data) {
//         console.log(data)
//     }
//     return(
//         <>
//         <form onSubmit={handleSubmit(onSubmitButton)}>
//         <div className="form-row">
//         <div className="col-md-4 mb-3"></div>
//         <div className="form-check form-check-inline">
//         <label>
//         <input className="form-check-input" type="radio" name="inlineOptions1" id="inline1" value="option1">
//         </input>
//         </label>
//         <label className="form-check-label" for="inline1">1</label>
//         </div>
//         <div className="form-check form-check-inline">
//         <input className="form-check-input" type="radio" name="inlineOptions2" id="inline2" value="option2">
//         </input>
//         <label className="form-check-label" for="inline2">2</label>
//         </div>
//         <div className="form-check form-check-inline">
//         <input className="form-check-input" type="radio" name="inlineOptions3" id="inline3" value="option3">
//         </input>
//         <label className="form-check-label" for="inline3">3</label>
//         </div>
//         <div className="form-check form-check-inline">
//         <input className="form-check-input" type="radio" name="inlineOptions4" id="inline3" value="option3">
//         </input>
//         <label className="form-check-label" for="inline4">4</label>
//         </div>
//         <div className="form-check form-check-inline">
//         <input className="form-check-input" type="radio" name="inlineOptions5" id="inline3" value="option3">
//         </input>
//         <label className="form-check-label" for="inline5">5</label>
//         </div>
        
//         <div className="form-group">
//         <label for="formGroupInput">Do you have any additional feedback?</label>
//         <input type="text" class="form-control" id="formGroupInput" placeholder="Example input">
//         </input>
//         <button type="submit" onClick={handleSubmit(onSubmitButton)}>
//                     Submit
//                 </button>
//         </div>
//         </div>
//         </form>
//         </>
// )
// }

// export default Form;