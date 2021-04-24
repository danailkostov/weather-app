import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import City from "./pages/City/City";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div>Nav</div>
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/city/:id" component={City} exact />
          <Route path="*" component={Error} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
