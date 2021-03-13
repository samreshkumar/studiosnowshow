import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Services = () => {
  window.scrollTo(0, 0)
  const [servicescontent, getservicescontent] = useState({
    acf: {
      services_banner_caption: '',
      services_section3: '',
      testimonial_title: '',
      servies_content: {
        services_section: ''
      }
    },
    content: {
      rendered: ''
    }

  });
  const [serviceslist, getserviceslist] = useState([])
  const [tesimoniallist, gettesimoniallist] = useState([])
  const [serviceslast, getserviceslast] = useState([])
  const [getClientlogo, setclientlogo] = useState([])
  const [loader, setloader] = useState(false);

  useEffect(() => {
    setloader(true);
    async function onloadservices() {
      const servidesData = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/pages?slug=services`);
      const servideslistData = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/acf/v3/options/options`);
      //console.log(servidesData.data.acf.services_banner_caption)
      //console.log(servidesData.data[0])
      //console.log(servidesData.data[0].acf.clients)
      console.log(servidesData.data[0].acf.Testimonial);
      getservicescontent(servidesData.data[0]);
      gettesimoniallist(servidesData.data[0].acf.Testimonial);
      getserviceslast(servidesData.data[0].acf.servies_content[0].services_section)
      getserviceslist(servideslistData.data.acf.home_services)
      setclientlogo(servidesData.data[0].acf.clients)
      setloader(false);
    } onloadservices();



  }, [])

  return (
    <>

{loader ? <Loader/> : ''}

<div className="services">
        <div className="services-wrapper">
            <div className="services-section1 d-flex just-space-btn">
                <div className="services-section1-left" dangerouslySetInnerHTML={{
                __html: servicescontent.content.rendered
              }}>
                </div>
                <div className="services-section1-left" dangerouslySetInnerHTML={{
                __html: servicescontent.acf.services_section3
              }}>
                              </div>
            </div>
        </div>
    </div>

<div className="services-section2">
    <div className="services-section2-inner">
        <p className="text-center">OUR SERVICES INCLUDE</p>
        <ul className="text-center">
          {
            serviceslist.map((data, index) => (
              <li key={index}>{data.home_services_name}</li>
            ))
          }
        </ul>
    </div>
</div>

<div className="services-section3">
    <div className="services-wrapper">
      

<div className="testimonial-outer d-flex just-space-btn">
<div className="testimonial-heading" dangerouslySetInnerHTML={{
                __html: servicescontent.acf.testimonial_title
              }}></div>

  {
  tesimoniallist.map((data, index) => (
    <React.Fragment key={index}>
      <div className="testimonial" key={index}>
          <p>{data.testimonial_content}</p>
          <h4>{data.client_name}</h4>
      </div>
    </React.Fragment>
  ))
}

</div>
    </div>
</div>



<div className="services-section6">
        <div className="services-section6-inner">
          
                    <div className="ticker">
                    {
  getClientlogo.map((data, index) =>(
    <div className="ticker__list" key={index}>
    <div className="ticker__item"> <img src={data.client_logo.url} alt="" /></div>
 </div>
  ))
}
        </div>
        </div>
</div>

<div className="services-section7">
    <div className="services-wrapper">
    <div className="services-section7-inner" dangerouslySetInnerHTML={{
                __html: servicescontent.acf.strategy
              }}>

    </div>
    </div>
</div>


     




    </>
  )
}

export default Services;