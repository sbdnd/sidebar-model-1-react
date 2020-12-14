import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Support from "./pages/Support";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/support" component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
