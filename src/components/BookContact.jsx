import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';

const BookContact = () => {
    const form = useRef(null)
    

    const [thmessage, setthmessage] = useState("");


    const { register, handleSubmit, reset, errors  } = useForm();
    const onSubmit = async (data, e) => {
        console.log(data);
        e.preventDefault();
        const Formdata = new FormData(form.current)
         await fetch('https://studiosnowshow.com/studioreact/wp-json/contact-form-7/v1/contact-forms/199/feedback', { method: 'POST', body: Formdata })
         .then((response) => {
                console.log(response);
                setthmessage('Thankyou for submittion');
            }).catch((error) =>{
                console.log(error) 
            });
            reset();

      
    }



    return (
        <div style={{ color: "#fff" }}>
            <form ref={form} className="contact-form-inner" onSubmit={handleSubmit(onSubmit)}>
           <div className="thankyoumessage"> {thmessage}</div>
                <div className="form-field form-field-new">
                  
                <select name="urname" placeholder="Enter Your Name"  ref={register({ required: true })}>
                <option>Please Select Book Name</option>
                    <option value="Conversations with Mahavatar Babaji">Conversations with Mahavatar Babaji</option>
                    <option value="Singhs of Punjab">Singhs of Punjab</option>
                </select>
                    <span className="error">{errors.urname && ' name is required.'}</span></div>
                <div className="form-field"><input type="email" name="email" placeholder="Enter Your Email" ref={register({
                    required: 'email is required', pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Invalid email address', }, })} />
                    <span className="error"> {errors.email && errors.email.message} </span></div>
                <div className="form-field"><textarea name="message" placeholder="Enter Your Message"  ref={register({ required: true })}></textarea>
                <span className="error">   {errors.message && ' Message is required.'} </span>
                    <button type="submit" className="mysubmit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default BookContact
