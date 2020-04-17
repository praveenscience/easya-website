import React from "react";
import { Switch, Route } from "react-router-dom";
import Paths from "../constants/Paths";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Subjects from "./Subjects/Subjects";
import HowItWorks from "./HowItWorks/HowItWorks";
import Terms from "./InfoPages/Terms";
import Privacy from "./InfoPages/Privacy";
import Error404 from "./InfoPages/404";
import TeachingMethods from "./TeachingMethods/TeachingMethods";
import WMCAL from "./WMCAL/WMCAL";
import ATBT from "./ATBT/ATBT";
import Pricing from "./Pricing/Pricing";
import MonthlyPricing from "./Pricing/MonthlyPricing";
import Blog from "./Blog/Blog";
import BlogDetails from "./BlogDetails/BlogDetails";
import FAQs from "./FAQs/FAQs";
import ContactUs from "./ContactUs/ContactUs";
import Testimonials from "./Testimonials/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={Paths.Home}>
          <Home />
        </Route>
        <Route path={Paths.About}>
          <About />
        </Route>
        <Route path={Paths.Subjects}>
          <Subjects />
        </Route>
        <Route path={Paths.HowItWorks}>
          <HowItWorks />
        </Route>
        <Route path={Paths.Terms}>
          <Terms />
        </Route>
        <Route path={Paths.Privacy}>
          <Privacy />
        </Route>
        <Route path={Paths.TeachingMethods}>
          <TeachingMethods />
        </Route>
        <Route path={Paths.WMCAL}>
          <WMCAL />
        </Route>
        <Route path={Paths.ATBT}>
          <ATBT />
        </Route>
        <Route path={Paths.Pricing}>
          <Pricing />
        </Route>
        <Route path={Paths.MonthlyPricing}>
          <MonthlyPricing />
        </Route>
        <Route path={Paths.Testimonials}>
          <Testimonials />
        </Route>
        <Route path={Paths.FAQs}>
          <FAQs />
        </Route>
        <Route exact={true} path={Paths.Blog}>
          <Blog />
        </Route>
        <Route path={Paths.BlogDetails}>
          <BlogDetails />
        </Route>
        <Route path={Paths.ContactUs}>
          <ContactUs />
        </Route>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
