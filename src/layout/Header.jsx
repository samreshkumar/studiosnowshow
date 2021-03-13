// import Axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
// const [getmenu, setmenu] = useState([]);
  const [openmenu, setmenuopen] = useState(false);

  useEffect(() => {
    onload();
    
  }, []);


  const onload = async (event) => {
  //   const menu = await Axios.get(
  //     "https://studiosnowshow.com/studioreact/wp-json/wp-api-menus/v2/menus/2"
  //   );    
  //  setmenu(menu.data.items);
  
  };


const menuClick = () =>{
  setmenuopen(!openmenu)
}

const menuChange= () =>{
  setmenuopen(false)
}



  

  return (
    <>
      <section className="header">
        <div className="wrapper">
          <div className="header-inner d-flex">
            <div className="logo">
              <Link to="/" className={openmenu ? 'open': ''}>
              <div className="blacklogo">
                  <img
                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                    alt=""
                    title=""
                  />
                  </div>
                  <div className="whitelogo" onClick={menuChange}><img src={process.env.PUBLIC_URL + "/images/white-logo.png"} alt="logo"/></div>
              
              </Link>
            </div>
            <div className={openmenu ? 'navigation open': 'navigation'}>
            <div id="mobile-menu" onClick={menuClick} className={openmenu ? 'open': ''}>
				<Link to="#"></Link>
				</div>
              <ul className={openmenu ? 'menu open': 'menu d-flex'} onClick={menuChange}>
                {/* <li>
                  <NavLink to="/">+ Home</NavLink>
                </li> */}
                <li>
                  <NavLink to="/services">+ services</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">+ portfolio</NavLink>
                </li>
              
                <li>
                  <NavLink to="/books">+ books</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">+ contact</NavLink>
                </li>
                {/* {getmenu.map((menu, index) => (
                  <li key={index}>
                    <NavLink to={`${menu.title}/`}>{menu.title}</NavLink>
                  </li>
                ))} */}
              </ul>

              <div className={openmenu ? 'mobile-copy-right mobile-copy-right-open': 'mobile-copy-right'}>
				<img src="/images/mobile-copy-right.png" alt=""/> {(new Date().getFullYear())}  ALL RIGHTS RESERVED 
				</div>
				<div className={openmenu ? 'mobile-menu-social mobile-menu-social-open': 'mobile-menu-social'}>
					<ul>
          <li><a href="https://www.facebook.com/studiosnowshow/" target="_blank">facebook</a></li><li><a href="https://www.instagram.com/studiosnowshow/" target="_blank">instagram</a></li><li><a href="https://www.linkedin.com/company/studiosnowshow/" target="_blank">linkedIn</a></li>
				</ul>
				</div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default React.memo(Header);
