import Axios from "axios";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom"
import ProjectTag from "./ProjectTag";
import CategoryList from './CategoryList'

const PortfolioListing = (props) => {
    const project_cat = props.project_cat
    //const [maincatnew, setmaincat] = useState([]);
    useEffect(() => {
      async function loaddata() {
      const maincat = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/project_categories`)
     // console.log(maincat.data)
      //setmaincat(maincat.data)
      } loaddata();
  
  }, []); 
    return (
        <>

<div className="project-th"> <Link to={`projectdetails/${props.slug}`}> <img src={`https://studiosnowshow.com/studioreact/wp-content/uploads/${props.media}`} alt="" />
            </Link></div>

            <div className="project-caption">
					<h4> <Link to={`projectdetails/${props.slug}`} dangerouslySetInnerHTML={{ __html: props.title }}>
                 
                </Link></h4>
                <div className="tages">
                {
                 project_cat.map((data, index) =>(
                  <React.Fragment key={index}>
                   
               
                     <ProjectTag taxtid={data}/>
                    
                      
                   </React.Fragment>
                 ))

               }
                </div>
                </div>

    
        </>
    );
};

export default React.memo(PortfolioListing);
