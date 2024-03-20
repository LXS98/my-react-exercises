import React from "react";
import SideNav from './components/layouts/SideNav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Exercise1 from "./components/main/exercise1";
import Exercise2 from "./components/main/exercise2";

import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  return (
    <Router>
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <SideNav />
          <div className="col d-flex flex-column h-sm-100">
                <main className="row overflow-auto">
                    <div className="col pt-4">
                      <Switch>
                        <Route path="/exercise1" component={Exercise1} />
                        <Route path="/exercise2" component={Exercise2} />
                      </Switch>
                    </div>
                </main>
                <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
