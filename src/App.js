import React, { Component } from "react"
import Navbar from "./components/Navbar"
import News from "./components/News"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default class App extends Component {
  countryData = "in"
  pageSize = 5

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="default"
                pageSize={this.pageSize}
                country={this.countryData}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                country={this.countryData}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country={this.countryData}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={this.pageSize}
                country={this.countryData}
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={this.pageSize}
                country={this.countryData}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.pageSize}
                country={this.countryData}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                country={this.countryData}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                country={this.countryData}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
