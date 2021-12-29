import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/crypto/:id">
                <CryptoDetails />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Text
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CrytpoSquared <br />
            All rights reserved.
          </Typography.Text>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
