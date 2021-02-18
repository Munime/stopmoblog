import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blogs} />
              <Route
                exact
                path="/blog/:blogTitle/:postId"
                component={BlogPost}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
