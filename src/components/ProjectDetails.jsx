import Axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Loader from "./Loader";

const ProjectDetails = () => {
    const {slug} = useParams();
    const [title, setTitle] = useState()
    const [details, setDetails] = useState({
        project_type:'',
        project_short_description:'',
        main_banner:'',
        main_banner_mobile:'',
        project_small_gallery1:[],
        project_small_gallery1_mobile:[],
        short_description2:'',
        full_banner1:'',
        full_banner1_mobile:'',
        short_description3:'',
        half_image:'',
        half_image_mobile:'',
        full_banner2:'',
        full_banner2_mobile:'',
        images_galler2:[],
        images_galler2_mobile:[],
        next_post_th:'',
        next_post_title:'',
        next_post_link:''


    })
    const [galleryfirst, setgalleryfirst] = useState([])
    const [gallerysc, setgallerysc] = useState([])
    const [galleryfirstm, setgalleryfirstm] = useState([])
    const [galleryscm, setgalleryscm] = useState([])
    const [loader, setloader] = useState(false)
    //const[loadcontent, setloadcontent] = useState();
    useEffect(() => {
        async function loaddata(){
            setloader(true);
            const project = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects?slug=${slug}`);
            console.log(project.data)
           //console.log(project.data[0].acf.images_galler2);
           //console.log(project.data[0].acf.full_banner1);
           //setloadcontent(project.data[0].acf.project_type);
           //console.log(project.data[0].acf.main_banner)
            setTitle(project.data[0].title.rendered)
            setgalleryfirst(project.data[0].acf.project_small_gallery1)
            setgallerysc(project.data[0].acf.images_galler2)
            //setDetails(project.data[0].content.rendered)
            setDetails(project.data[0].acf)
            setgalleryscm(project.data[0].acf.images_galler2_mobile)
            setgalleryfirstm(project.data[0].acf.project_small_gallery1_mobile)
            setloader(false);
           
        }loaddata();
        
    }, [slug]) ;



    return (
    <>
{loader ? <Loader/> : ''}


{details.project_short_description !=='' ? 
<>
            <div className="detailsbanner">
                <div className="wrapper">
                    <div className="banner-image">
                        <img src={details.main_banner.url} alt="" title="" className="desktopshow"/>
                        <img src={details.main_banner_mobile.url} alt="" title="" className="mobileshow"/>
                    </div>
                </div>
            </div>

            <div className="project-details-temp1">
                <div className="wrapper">
                    <div className="temp1-inner">
                        <div className="pd-sec1 d-flex space-between">
                            <div className="pd-temp1-projectname" dangerouslySetInnerHTML={{ __html: details.project_type }}>
                          
                            </div>
                            <div className="pd-temp1-projectdel1">
                              {details.project_short_description}
                            </div>
                        </div>

                        <div className="pd-sec2 d-flex space-between desktopshow">
                        {
					    galleryfirst.map((data, index) => (
                            <React.Fragment key={index}>
                         <div className="pd-temp2-galley">
                                <img src={data.project_small_gallery1_image.url}  alt="" title=""/>
                            </div>
                            </React.Fragment>
                        ))
                        }
                        </div>

                        <div className="pd-sec2 d-flex space-between mobileshow">
                        {
					    galleryfirstm.map((data, index) => (
                            <React.Fragment key={index}>
                         <div className="pd-temp2-galley">
                                <img src={data.project_small_gallery1_mobile_image.url}  alt="" title=""/>
                            </div>
                            </React.Fragment>
                        ))
                        }
                        </div>



                        <div className="pd-sec3 d-flex row-reverse">
                            <div className="pd-temp2-projectdel2"> {details.short_description2}</div>
                        </div>

                        <div className="pd-sec4">
                            <img src={details.full_banner1.url} alt="" title="" className="desktopshow"/>
                            <img src={details.full_banner1_mobile.url} alt="" title="" className="mobileshow"/>
                        </div>
                      

                        <div className="pd-sec3 d-flex">
                            <div className="pd-temp2-projectdel2">{details.short_description3}</div>
                        </div>
                        <div className="pd-sec4 pd-sec5">
                            <img src={details.full_banner2.url}  alt="" title="" className="desktopshow"/>
                            <img src={details.full_banner2_mobile.url}  alt="" title="" className="mobileshow"/>
                        </div>


                        <div className="pd-sec6 d-flex row-reverse">
                            <div className="pd-temp2-half-image">
                                
                            <img src={details.half_image.url}  alt="" title="" className="desktopshow"/>
                            <img src={details.half_image_mobile.url}  alt="" title="" className="mobileshow"/>
                                
                                </div>
                        </div>

                        <div className="pd-sec2 d-flex space-between desktopshow">
                        {
					    gallerysc.map((data, index) => (
                            <React.Fragment key={index}>
                         <div className="pd-temp2-galley">
                                <img src={data.gallery_images2.url}  alt="" title=""/>
                            </div>
                            </React.Fragment>
                        ))
                        }
                        </div>

                        <div className="pd-sec2 d-flex space-between mobileshow">
                        {
					    galleryscm.map((data, index) => (
                            <React.Fragment key={index}>
                         <div className="pd-temp2-galley">
                                <img src={data.images_galler2_mobile_image.url}  alt="" title=""/>
                            </div>
                            </React.Fragment>
                        ))
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="next-post-tep1">
                <div className="wrapper">
                    <a href={details.next_post_link}>
                        <div className="nextpost-title" dangerouslySetInnerHTML={{ __html: details.next_post_title }}></div>
                        <div className="nextpost-th">
                            <img src={details.next_post_th.url} alt="" title=""/>
                        </div>
                    </a>
                </div>
            </div> </>: <div className="wrapper"><div className="min-height-min-page"><h1>coming soon...</h1></div></div>}
            

    </>
    )
}

export default ProjectDetails
