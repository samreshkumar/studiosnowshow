import Axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import ProjectCategories from './ProjectCategories'



const ProjectTag = (props) => {
    const taxtid = props.taxtid
    console.log(taxtid)
const [newcat, setnewcat] = useState([])
 
useEffect(() => {
    async function loaddata() {
        const taxanomy = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/project_categories/${taxtid}`);
        console.log(`taxanomy:-https://studiosnowshow.com/studioreact/wp-json/wp/v2/project_categories/${taxtid}`)
        setnewcat(taxanomy.data)
    } loaddata();

}, [])


    return (
      <>
    
        <Link className="btn btn-warning" to={`/project_categories/${newcat.id}`}  >{newcat.name}</Link> <span className="divider">X</span> 
        </>
    )
}

export default React.memo(ProjectTag)
