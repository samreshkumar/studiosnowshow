import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import BookContact from '../components/BookContact';
import BookTagList from '../components/BookTagList';
import Loader from "../components/Loader";
import ProjectTag from "../components/ProjectTag"


const Books = () => {
    const [statecat, setstatecatg] = useState([]);
    const [bookmaindata, setbookmaindata] = useState([]);
    const [loader, setloader] = useState(false);
    const [acfdata, gatacfdata] = useState({
        book_banner:'',
        book_banner_caption:'',
        form_caption:''
    })


    useEffect(() => {
        window.scrollTo(0, 0)
        setloader(true);
        async function onloadbook() {
            const bookdata = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/book`);
            const bookacf = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/pages?slug=books`);
            const tags = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/projects`)
            console.log(bookdata.data)
           // console.log(bookacf.data[0].acf.book_banner.url)
            //console.log(bookdata.data)
            setbookmaindata(bookdata.data)
            gatacfdata(bookacf.data[0].acf)
            setloader(false)
            setstatecatg(bookdata.data)
            //console.log(bookdata.data[1].better_featured_image.source_url)
            //console.log(bookdata.data[1].title.rendered)


        } onloadbook();
    }, [])
    return (
        <>
  {loader ? <Loader/> : ''}

<div className="book-banner-section">
    <div className="book-banner-wrapper">
        <div className="book-banner-section1 d-flex just-space-btn">
        <div className="book-banner-left">
            <img src={acfdata.book_banner.url} alt="" style={{maxWidth:'100%'}}/>
        </div>
        <div className="book-banner-right">
            <p dangerouslySetInnerHTML={{
                __html: acfdata.book_banner_caption
              }}></p>

        </div>
        </div>
    </div>
</div>

<div className="book-section2">
<div className="book-banner-wrapper">
    <div className="book-listing-outer">

{
bookmaindata.map((booklist, index) => (
    <React.Fragment key={index}>
        <div className="book-listing" key={index}>
            <div className="book-th">
                <Link to={`/bookdetails/${booklist.slug}`}>  {booklist.better_featured_image == null ? '' : <img src={booklist.better_featured_image.source_url} alt="" />}  </Link>
            </div>
            <div className="book-caption">
                <h4><Link to={`/bookdetails/${booklist.slug}`}>{booklist.title.rendered}</Link>
                </h4>
                <div className="tages">
                    <BookTagList project_cat={booklist.project_categories}/>
					</div>

            </div>
        </div>

    </React.Fragment>
))
}
    </div>
</div> 
</div>


<div className="book-form">
    <div className="book-form-wrapper">
        <div className="book-form-heading" dangerouslySetInnerHTML={{
                __html: acfdata.form_caption
              }}></div>
           <BookContact/>
    </div>
</div>

<div className="bg-border">

    <img src={process.env.PUBLIC_URL + "/images/border-new.svg"} alt="" title=""/>
</div>


        </>

    )
}

export default Books
