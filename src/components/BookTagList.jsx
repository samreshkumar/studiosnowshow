import React from "react";
import ProjectTag from "./ProjectTag";

const BookTagList = (props) => {
    const project_cat = props.project_cat
    return (
       <>
        {
                 project_cat.map((data, index) =>(
                  <React.Fragment key={index}>
                   
                  
                     <ProjectTag taxtid={data}/>
                     
                      
                   </React.Fragment>
                 ))

               }
       </>
    )
}

export default BookTagList
