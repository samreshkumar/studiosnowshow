import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import HomeProjectListing from "../components/HomeProjectListing";
import Contact from "./Contact";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../components/Loader";

const Home = () => {
const [state, setstate] = useState([]);
const [statecat, setstatecatg] = useState([]);
const [homslider, sethomeslider] = useState([]);

const [optioncontent, setoptioncontent] = useState({
    home_cpation:'',
    guid:'',
    brand_clarity_content:''
});
const [serviceslist, getserviceslist] = useState([])
const [loader, setloader] = useState(false);
useEffect(() => {
	window.scrollTo(0, 0)
setloader(true);
async function loaddata() {
const project = await Axios.get('https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects?per_page=20');
const options = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/acf/v3/options/options`)
const categories = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects/?categories=1`)
const tags = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects`)
const maincat = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/project_categories`)

console.log(options.data);
//console.log(project.data);
// console.log(maincat.data);
// console.log(tags.data);
//console.log(project.data[0])
setloader(false)
setstate(project.data)
setoptioncontent(options.data.acf)
getserviceslist(options.data.acf.home_services)
setstatecatg(tags.data.project_categories)
sethomeslider(options.data.acf.home_slider)
} loaddata();

}, []);





const resultsRef = useRef();

const ArrowClick = () =>{
if (resultsRef.current) {
window.scrollTo({
behavior: "smooth",
top: resultsRef.current.offsetTop
});
}
}

var settings = {
	dots: true,
      infinite: true,
      slidesToShow: 1,
      fade: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
  };



return (

<>
    {loader ? <Loader/> : ''}


		<div className="home-banner">
			<Slider {...settings}>

				{
					homslider.map((data, index) => (
						<>
							<div key={index}>
								<div className="banner-image">
									<div className="desktop-show">

											{/* <div className="desktop-show home-banner-bg" style={{backgroundImage: `url(${data.home_banner_image.url})` }}>	 */}
										<img src={data.home_banner_image.url} alt="" title="" />
									</div>
									<div className="mobile-show">
										<img src={data.home_mobile_banner.url} alt="" title="" />
									</div>
								</div>
								<div className="wrapper">
									<div className="home-banner-caption" dangerouslySetInnerHTML={{
										__html: data.home_banner_caption
									}}></div>
								</div>
							</div>
						</>
					))
				}


			</Slider>
		</div>



        <div className="home-wrapper2 mob-none">
	<div className="home-section1 d-flex">
		<div className="circle">
			<div className="circlepoint"></div>
		</div>
	
		<div className="section1-content">
        <div dangerouslySetInnerHTML={{
                  __html: optioncontent.guid
                }}>
            
                </div>
        </div>
		<div className="section1-link">
			<Link to={`/services/`}>Learn More</Link>
		</div>
	</div>
</div>






<div className="home-project-listing">
	<div className="wrapper">
		<div className="home-listing1 d-flex">

		{
			state.map((data, index) => (
			// <p>{data.id}</p>
			<React.Fragment key={index}>
				{data.parent === 0 ? <div className="project-inner">
					<HomeProjectListing index={index} title={data.title.rendered}
						media={data.better_featured_image.media_details.file} slug={data.slug} project_cat ={data.project_categories} />
						
				</div> : ''}
			</React.Fragment>
			))
			}
		</div>
		</div>


		<div className="home-wrapper2 mobile-home-section1 desktop-none">
	<div className="home-section1 d-flex">
		<div className="section1-content">
			<div className="starname"><img src={process.env.PUBLIC_URL + "/images/star.png"} /></div>
        <div dangerouslySetInnerHTML={{
                  __html: optioncontent.guid
                }}>
            
                </div>
        </div>
		<div className="section1-link">
			<Link to={'/services'}>Learn More</Link>
		</div>
	</div>
</div>



<div className="wrapper">

		<div className="home-listing2 d-flex">
			<div className="column1">
			{
			state.map((data, index) => (
			// <p>{data.id}</p>
			<React.Fragment key={index}>
				{data.parent === 0 ? <div className="project-inner">
					<HomeProjectListing index={index} title={data.title.rendered}
						media={data.better_featured_image.media_details.file} slug={data.slug} project_cat ={data.project_categories} />
						
				</div> : ''}
			</React.Fragment>
			))
			}
			</div>
			<div className="column2">
			{
			state.map((data, index) => (
			// <p>{data.id}</p>
			<React.Fragment key={index}>
				{data.parent === 0 ? <div className="project-inner">
					<HomeProjectListing index={index} title={data.title.rendered}
						media={data.better_featured_image.media_details.file} slug={data.slug} project_cat ={data.project_categories} />
						
				</div> : ''}
			</React.Fragment>
			))
			}
		
			</div>
		</div>
		<div className="home-listing3 d-flex">
		{
			state.map((data, index) => (
			// <p>{data.id}</p>
			<React.Fragment key={index}>
				{data.parent === 0 ? <div className="project-inner">
					<HomeProjectListing index={index} title={data.title.rendered}
						media={data.better_featured_image.media_details.file} slug={data.slug} project_cat ={data.project_categories} />
						
				</div> : ''}
			</React.Fragment>
			))
			}
		</div>
		

	</div>
</div>

<div className="view-all-outer">
<div className="view-all">
<Link className="btn btn-warning" to={`/portfolio`}><h4>View All Projects</h4></Link>
</div>
</div>




<div style={{display:'none'}}>
    <section className="home-section1">
        <div className="home-banner-caption" dangerouslySetInnerHTML={{
                  __html: optioncontent.home_cpation
                }}>

        </div>
        {/* <div className="caption-image">
            <div id="experiences-hover" className="opacity0" style={{backgroundImage:""}}></div>

            <div id="connect-hover" className="opacity0" style={}></div>
        </div> */}
        <div className="down-arrow" onClick={ArrowClick}><img
                src="/images/downarrow.svg" alt=""  style={{width:'27px', height:'43px'}}/></div>
    </section>
    <section className="home-project-section" ref={resultsRef}>
        <div className="wrapper">
            <div className="home-project-main">
                {
                state.map((data, index) => (
                // <p>{data.id}</p>
                <React.Fragment key={index}>
                    {data.parent === 0 ? <div className="home-project-inner">
                        <HomeProjectListing index={index} title={data.title.rendered}
                             media={data.better_featured_image.media_details.file} slug={data.slug} project_cat ={data.project_categories} />
                            
                    </div> : ''}
                </React.Fragment>
                ))
                }
            </div>
        </div>
    </section>

    <section className="guid">
        <div className="wrapper">
            <div className="guid-inner" dangerouslySetInnerHTML={{
                  __html: optioncontent.guid
                }}>
            
                </div>
        </div>


        <div className="guid-secon-section">
            <div className="gu-left">
                <div className="gu-logo">
                    <img src="https://studiosnowshow.com/studioreact/wp-content/uploads/2020/10/footer-logo.png" alt="" />
                </div>
                <p dangerouslySetInnerHTML={{
                  __html: optioncontent.brand_clarity_content
                }}></p>
            </div>
            <div className="gu-right">
                <h4>OUR SERVICES INCLUDE</h4>
                <ul>
                {
            serviceslist.map((data, index) => (
              <li key={index}>{data.home_services_name}</li>
            ))
          }
                </ul>
            </div>
        </div>
    </section>

</div>


</>
)
}

export default React.memo(Home);