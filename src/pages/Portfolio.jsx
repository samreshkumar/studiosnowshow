import Axios from "axios";
import React from "react"
import { useState, useEffect } from "react";
import PortfolioListing from "../components/PortfolioListing";
import Loader from "../components/Loader"


const Portfolio = () => {

    const [state, setstate] = useState([])
    const [loader, setloader] = useState(false);
    const [statecat, setstatecatg] = useState([]);
    const [templatdata, settemplatedata]= useState([]);
    // const [getmedia, setmedia] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        setloader(true);
        // settemplatedata(true);
        async function loaddata() {
            const noOfPosts = await Axios.get('https://studiosnowshow.com/studioreact/wp-json/custom/v1/all-posts')
            const noOfProjects = (noOfPosts.data.length)
            const project = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects?per_page=${noOfProjects}`);      
            const tags = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects`)    
            const tagsn = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/project_categories`)  
            //console.log(project.data);
            setloader(false)
            setstate(project.data)
            //console.log(tagsn.data)
            settemplatedata(tagsn.data)
            setstatecatg(tags.data.project_categories)
         
          

        } loaddata();

    }, []);



    return (
        <>

        
            {loader ? <Loader/> : ''}

            <div className="wrapper">

            <div className="filter-tag">
		</div>
{/* {
    templatdata.map((ndata,index) => (
<>
{ndata.id}
</>
    ))
} */}

            <section className="project-listing d-flex">
           

                    { 
                        state.map((data, index) => (
                            // <p>{data.id}</p>
                            <React.Fragment key={index}>
                                {data.parent === 0 ? <div className="project-inner" ><PortfolioListing index={index} title={data.title.rendered} media={data.better_featured_image.media_details.file} slug={data.slug} project_cat ={data.project_categories} /></div> : ''}
                            </React.Fragment>
                        ))
                    }
              
            </section>
            </div>
        </>
    )
}
export default React.memo(Portfolio);