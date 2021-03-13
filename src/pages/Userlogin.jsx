import Axios from 'axios';
import React, {useState, useRef} from 'react'
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';


const Userlogin = () => {

    const form = useRef(null)
    const [getlogin, setlogin] = useState(false)
    const [getstate, setthmessage] = useState("")
    const [getdata, setdata] = useState({
        token:'',
        user_email:'',
        user_display_name:'',
        user_nicename:''
    })
    const [geterroe, seterror]= useState('');
const { register, handleSubmit, reset, errors  } = useForm();
const onSubmit = async (data, e) => {
    e.preventDefault();
    await Axios.post('https://studiosnowshow.com/studioreact/wp-json/jwt-auth/v1/token', data)
    .then(res => {
        console.log(res.data);
        setdata(res.data)
        console.log(res.data.user_nicename);
        if(res.data === undefined){
            console.log(data.message)
        }else{
            setthmessage('login succesfully');
            localStorage.setItem('token',res.data.token )
            localStorage.setItem('user_email', res.data.user_email )
            localStorage.setItem('user_display_name', res.data.user_display_name )
            localStorage.setItem('user_nicename', res.data.user_nicename )
            setlogin(true)
        }

    })
    .catch(error => {
        seterror(error.response.data.message)
    })
    reset();

   //username: "writeyourpost", email: "aaaaa@g.com", password: "876874236587643867458453"
  //youtube.com/watch?v=KbzyrKnJOZU
}




    return(
        <>
  {(getlogin || localStorage.getItem('token')) ? 
  
  <Redirect to={'/'} />

  : 
  
  <form ref={form} className="registration-outer" style={{ padding: "100px 0" }} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inner-content">
                    {getstate}{geterroe}
                    <div className="form-group col-form">
                        <label>user:</label>
                        <input type="text" name="username" className="form-control" ref={register({ required: true })} />
                        {errors.username && ' username is required.'}
                    </div>

                    <div className="form-group col-form">
                        <label>Password:</label>
                        <input type="password" name="password" className="form-control" ref={register({ required: true })} />
                        {errors.password && ' password is required.'}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>}



         
        </>
    )
}


export default React.memo(Userlogin);