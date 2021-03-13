import React from 'react'

const BackTOTOp = () => {
    
      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
  

    return (
    //     <div className="backtotop" onClick={scrollTop} style={{color:'#fff'}}>
    //    <img src={process.env.PUBLIC_URL + "/images/backtotop.svg"} alt="" title="" />
    // </div>
      <div className="backtotop" onClick={scrollTop} style={{color:'#7091E8'}}>
       BACK TO TOP
    </div>
    )
}

export default BackTOTOp
