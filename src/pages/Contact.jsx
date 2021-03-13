import Axios from "axios";
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Loader from "../components/Loader"
import '../contact.css';
const Contact = () => {

  const [state, setstate] = useState({
    acf: {
      footer_logo: {
        url: ''
      },
      footer_content: '',
      get_in_touch: '',

    }

  });
  const [social, setfollowus] = useState([]);
  const [loader, setloader] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    setloader(true);
    onload();
 
  }, [])

  const onload = async () => {
    const options = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/acf/v3/options/options`)
    console.log(options.data);
    // console.log(options.data)
    setstate(options.data);
    setfollowus(options.data.acf.follow_us)
    setloader(false);

  }
  return (
    <>

{loader ? <Loader/> : ''}

<footer className="contact-page">
<div className="footer">
    <div className="wrapper">
        <div className="footer-inner d-flex">
            <div className="footer-section1 d-flex">
                {/* <!-- <div className="footer-logo"><img src="images/footer-logo.svg"/></div> --> */}
                <div className="footer-content">
               <h4>We’re always exploring new opportunities and exciting collaborations.</h4>
<h4>Join us on this journey!</h4>
                </div>
            </div>
            <div className="footer-section2">
                {/* <div className="footer-heading">GET IN TOUCH</div> */}
                <div className="connect">
                <div
                  dangerouslySetInnerHTML={{
                    __html: state.acf.get_in_touch
                  }}></div>
                </div>
                <div className="subs">
                <div className="footer-heading">FOLLOW US</div>
            <div className="social">
            <ul>
                  {
                    social.map((sdata, index) => (
                      <li key={index}> 
                      {/* <Link to={sdata.url} target="_blank">{sdata.social_handle_name}</Link>		 */}
                   <Link to="#"> {sdata.social_handle_name}</Link>
                      </li>
                    ))
                  }
                </ul>
            </div>
                </div>
            </div>
          
        </div>
    </div>


<div className="circle-contact-bottom"></div>



</div>


</footer>






      

    </>
  )
}


export default Contact;