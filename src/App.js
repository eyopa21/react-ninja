import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
             <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetail/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
