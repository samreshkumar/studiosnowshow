import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Books from "../pages/Books";
import ProjectDetails from "../components/ProjectDetails";
import BookDetails from "../components/BookDetails";
import NotFoundpage from "../pages/NotFoundpage";
import UserReg from "../pages/UserReg";
import Userlogin from "../pages/Userlogin";
import ProjectCategories from "../components/ProjectCategories";



const Routing = () => {
  
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projectdetails/:slug" component={ProjectDetails} />
                <Route exact path="/bookdetails/:slug" component={BookDetails} />
                <Route exact path="/registration" component={UserReg} />
                <Route exact path="/login" component={Userlogin} />
                <Route exact path="/project_categories/:id" component={ProjectCategories} />
                <Route  component={NotFoundpage}/>
            </Switch>
            {/* <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/portfolio"> <Portfolio/></Route>
                <Route exact path="/services"><Services/></Route>
                <Route exact path="/books"><Books/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/projectdetails/:slug"><ProjectDetails/></Route>
                <Route exact path="/bookdetails/:slug"><BookDetails/></Route>
                <Route exact path="/registration"><UserReg/></Route>
                <Route exact path="/login" component={Userlogin} />
                <Route exact path="/project_categories/:slug"><ProjectCategories/></Route>
                <Route><NotFoundpage/></Route>
            </Switch> */}
        </>
    )
}

export default Routing;

