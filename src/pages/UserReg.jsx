import React, {useState, useRef} from 'react'
import { useForm } from 'react-hook-form';

const UserReg = () => {
    const form = useRef(null)
    const [getstate, setthmessage] = useState("")
const { register, handleSubmit, reset, errors  } = useForm();
const onSubmit = async (data, e) => {
    console.log(data);
    //console.log(JSON.stringify({data}))
    e.preventDefault();
    await fetch('https://studiosnowshow.com/studioreact/wp-json/wp/v2/users/register', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' },  })
    .then((response) => {
        console.log(data);
           console.log(response);
           setthmessage('Thankyou for submittion');
       }).catch((error) =>{
           console.log(error) 
       });
       //username: "writeyourpost", email: "aaaaa@g.com", password: "876874236587643867458453"
       reset();
  
}





    return (
        <>
<form  ref={form}  className="contact-form-inner registration-outer"  onSubmit={handleSubmit(onSubmit)}>
   {getstate}
    <div className="form-inner-content">

<div className="form-group col-form">
    <label>user:</label>
    <input type="text" name="username" className="form-control"  ref={register({ required: true })}/>
    {errors.username && ' username is required.'}
  </div>

  <div className="form-group col-form">
    <label>Email address:</label>
    <input type="email" name="email" className="form-control" ref={register({
                    required: 'email is required', pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Invalid email address', }, })}/>
                         {errors.email && errors.email.message}
  </div>

  <div className="form-group col-form">
    <label>Password:</label>
    <input type="password" name="password" className="form-control"   ref={register({ required: true })}/>
    {errors.password && ' password is required.'}
  </div>
  <button type="submit">Submit</button>
  </div>
</form>
          
        </>
    )
}

export default UserReg
