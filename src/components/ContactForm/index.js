import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers'
const ContactForm = () => {
const [errorMessage, setErrorMessage] = useState('')
const [formState, setFormState] = useState({name: '', email: '', message: ''})
const {name,email,message} = formState;

const handleChange = (e) => {
  if (e.target.name === 'email'){
    const isValid = validateEmail(e.target.value);
    if(!isValid) {
      setErrorMessage('your email is invalid')
    } else {
      setErrorMessage('')
    }
  } else{
    if(!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`)
    } else {
      setErrorMessage('')
    }
  }
  if (!errorMessage) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }    
}

const handleSubmit = (event) => {
  event.preventDefault();
  const {name,email,message} = formState
  if(name && email && message){
    console.log(formState)
  } else{
    setErrorMessage('form not filled out')
  }
}
  return(
    <section>
      <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label >Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
             <label >Email address:</label>
             <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
          </div>
          <div>
             <label>Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
          </div>
          {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
          </div>
       )}
           <button type="submit">Submit</button>
          </form>
  </section>
  )
}
export default ContactForm;