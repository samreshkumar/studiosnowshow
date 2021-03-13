import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';


const ContactForm = () => {
    const form = useRef(null)
    

    const [thmessage, setthmessage] = useState("");

    const { register, handleSubmit, reset, errors  } = useForm();
    const onSubmit = async (data, e) => {
        console.log(data);
        e.preventDefault();
        const Formdata = new FormData(form.current)
         await fetch('https://studiosnowshow.com/studioreact/wp-json/contact-form-7/v1/contact-forms/208/feedback', { method: 'POST', body: Formdata })
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
            <h1>Contact Form</h1>
            <form ref={form} className="contact-form-inner" onSubmit={handleSubmit(onSubmit)}>
            {thmessage}
                <div className="col-form"><input type="text" name="urname" placeholder="Enter Your Name"  ref={register({ required: true })} />
                    {errors.urname && ' name is required.'}</div>
                <div className="col-form"><input type="email" name="email" placeholder="Enter Your Email" ref={register({
                    required: 'email is required', pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Invalid email address', }, })} />
                    {errors.email && errors.email.message} </div>
                <div className="col-form"><input type="tel" name="tel" placeholder="Enter Your Phone No"  maxLength="10" ref={register({
                    required: 'phone no is required', pattern: {value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                        message: 'Invalid phone no', },})} />{errors.tel && errors.tel.message}</div>
                <div className="col-form"><textarea name="message" placeholder="enter Your message"  ref={register({ required: true })}></textarea>
                    {errors.message && ' Message is required.'} </div><div className="col-form">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
