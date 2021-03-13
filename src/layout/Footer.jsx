import Axios from "axios";
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import BackTOTOp from "../components/BackTOTOp";

const Footer = () =>{
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
	  useEffect(() => {
		onload();
	  }, [])
	
	  const onload = async () => {
		const options = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/acf/v3/options/options`)
		//console.log(options.data);
		// console.log(options.data)
		setstate(options.data);
		setfollowus(options.data.acf.follow_us)
	
	  }
    return(
        <>


<footer>
<div className="footer desktop-copy">
    <div className="wrapper">
        <div className="footer-inner d-flex">
            <div className="footer-section1 d-flex">
                <div className="footer-logo"><img src={process.env.PUBLIC_URL + "/images/footer-logo.svg"}/></div>
              
                <div className="footer-content">
			
               <h4 dangerouslySetInnerHTML={{
                  __html: state.acf.footer_content
                }}></h4>
                </div>
            </div>
            <div className="footer-section2">
                <div className="footer-heading white-color">GET IN TOUCH</div>
                <div className="connect">
                <a href="mailto:ello@studiosnowshow.com">hello@studiosnowshow.com</a>
                </div>
                <div className="subs">
                </div>
            </div>
            <div className="footer-section3">
            <div className="footer-heading">CONNECT WITH US</div>
            <div className="social">
			<ul>
                  {
                    social.map((sdata, index) => (
                      <li key={index}> 
                      {/* <Link to={sdata.url} target="_blank">{sdata.social_handle_name}</Link>		 */}
                <a href={sdata.social_url} target="_blank">{sdata.social_handle_name}</a>
                      </li>
                    ))
                  }
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>

<div className="footer mobile-copy">
    <div className="wrapper">
        <div className="footer-inner d-flex">
            <div className="footer-section1 d-flex">
                <div className="footer-logo"><img src={process.env.PUBLIC_URL + "/images/footer-logo.svg"}/></div>
              
                <div className="footer-content">
			
               <h4 dangerouslySetInnerHTML={{
                  __html: state.acf.footer_content
                }}></h4>
                </div>

                <div className="mobile-emailid"> <a href="mailto:ello@studiosnowshow.com">hello@studiosnowshow.com</a></div>
            </div>
            <div className="footer-section2">
                <div className="footer-heading">CONNECT WITH US</div>
                <div className="connect">
                <a href="tel:+91 9773 769 553">+91 9773 769 553</a>
                </div>
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



<div className="copyright desktop-copy">
<div className="wrapper">
    <div className="copyright-inner d-flex justify-content-space-between">
    <div className="copy"><img src={process.env.PUBLIC_URL + "/images/crn.svg"}  alt="" title=""/>
 {(new Date().getFullYear())} ALL RIGHTS RESERVED </div>
	<BackTOTOp/>
</div>
</div>
</div>
<div className="copyright mobile-copy">
<div className="wrapper">
    <div className="copyright-inner d-flex">
    <div className="copy">
    <img src={process.env.PUBLIC_URL + "/images/crn.svg"}  alt="" title=""/> {(new Date().getFullYear())} ALL RIGHTS RESERVED </div>
	<BackTOTOp/>
</div>
</div>
</div>
</footer>






    <section className="footer-bottom" style={{display:"none"}}>
	<div className="wrapper">
		<div className="footer-bottom-inner">
			<div className="email-connect">
				<h4>CONNECT WITH US</h4>
				<a href="mailto:hello@studiosnowshow.com">hello@studiosnowshow.com</a>
			</div>
			<BackTOTOp/>
		</div>
	</div>
</section>
<section className="copy-right" style={{display:"none"}}>
	<div className="wrapper">
		<div className="inner-copy">
            <img src={process.env.PUBLIC_URL + "/images/copy-right.png"} alt="" /> {(new Date().getFullYear())}ALL RIGHTS RESERVED 
		</div>
	</div>
</section>
        </>
    )
}

export default Footer;