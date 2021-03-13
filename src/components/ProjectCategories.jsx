import Axios from "axios";
import React,{useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";



const ProjectCategories = () => {
    const { id } = useParams();
    console.log(`peers id:- ${id}`)
    const [state, setstate] = useState([])

useEffect(() => {
    onload()
}, []);


const onload = async () => {
    const getTagId = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects?project_categories=${id}`)
    //console.log(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects?project_categories=${id}`)
    //console.log(getTagId.data);
   setstate(getTagId.data);


  }


    return (
     <>
     <div className="wrapper">
 <section className="project-listing d-flex category-list">  
{
state.map((data, index) =>(
<React.Fragment key={index}>
    <div className="project-inner"><div className="project-th"> <Link to={`/projectdetails/${data.slug}`}>
    <img src={`https://studiosnowshow.com/studioreact/wp-content/uploads/${data.better_featured_image.media_details.file}`} alt="" />
</Link></div>
    <div className="project-caption">
            <h4> <Link to={`projectdetails/${data.slug}`}  dangerouslySetInnerHTML={{ __html: data.title.rendered }}>
           
</Link></h4>
        </div></div>

</React.Fragment>
))

}
</section>
</div>
         
         </>

      


    )
}

export default React.memo(ProjectCategories)