import React from 'react'

const Loader = () => {
    return (
       <>
       <div className="loadding">
           <img src=  {process.env.PUBLIC_URL + "/images/loader.gif"} />
       </div>
       </>
    )
}

export default Loader
