import React from 'react'
import LandingPage from "./landingPage/LandingPage";
import Route from "react-router-dom/es/Route";
import AboutPage from "./aboutPage/AboutPage";
import Switch from "react-router-dom/es/Switch";
import ContactPage from "./contactPage/ContactPage";
import PreviousJobsPage from "./previousJobsPage/PreviousJobs";


const Body = () => {

    return (
        <>
            <Switch>
                <Route path="/om-os" component={AboutPage} />
                <Route path="/kontakt" component={ContactPage}/>
                <Route path="/tidligere-opgaver" component={PreviousJobsPage}/>
                <Route path="/privacy-policy" component={PreviousJobsPage}/>

                <Route path="/" component={LandingPage}/>

            </Switch>

        </>
    )
};
export default Body;
