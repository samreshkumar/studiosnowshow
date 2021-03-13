import Axios from "axios"
import React, {useState, useEffect} from  "react"
import { useParams } from "react-router-dom"

const BookDetails = () =>{
const {slug} = useParams();
const [booklistdata, setbooklistdata] = useState({
    title:{
        rendered:''
    },
    content:{
        rendered:''
    }
})
useEffect(() => {
async function onload(){
    const bookDetailsdata = await Axios.get(`https://studiosnowshow.com/studioreact/wp-json/wp/v2/book?slug=${slug}`)
    console.log(bookDetailsdata.data);
    setbooklistdata(bookDetailsdata.data[0])
}onload();
}, [slug])



    return(
        <>
     <h1>{booklistdata.title.rendered}</h1>
     <div dangerouslySetInnerHTML={ {__html: booklistdata.content.rendered} }></div>
        </>
    )
}

export default BookDetails;