import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import City from "./pages/City/City";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Box style={{backgroundColor: 'red'}}>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/city/:id" component={City} exact />
            <Route path="*" component={Error} />
          </Switch>
        </Container>
        {/* <Footer /> */}
      </Box>
    </Router>
  );
}

export default App;
