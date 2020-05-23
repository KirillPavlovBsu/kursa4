import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./client/pages/MainPage/MainPage";
import ProfilesPage from "./client/pages/ProfilesPage/ProfilesPage";
import GalleryPage from "./client/pages/GalleryPage/GalleryPage";
import SignInPage from "./client/pages/SignInPage/SignInPage";
import CreateEventPage from "./client/pages/CreateEventPage/CreateEventPage"
import CategoriesPage from "./client/pages/CategoriesPage/CategoriesPage"
import EventPage from "./client/pages/EventPage/EventPage";
import SignUpPage from "./client/pages/SignUpPage/SignUpPage"
import FindPairPage from "./client/pages/FindPairPage/FindPairPage"

class App extends Component {



  render () {
    return (
        <Router>
          <>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/event" component={EventPage}/>
            <Route exact path="/profiles" component={ProfilesPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/createmeeting" component={CreateEventPage} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/findpair" component={FindPairPage} />
          </>
        </Router>
    );
  }
}

export default App;
