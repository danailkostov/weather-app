import { Box, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import City from "./pages/City/City";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    backgroundImage:
      "url(https://source.unsplash.com/collection/1408037/1600x900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Box className={classes.wrapper}>
        <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/city/:id" component={City} exact />
            <Route path="*" component={Error} />
          </Switch>
        {/* <Footer /> */}
      </Box>
    </Router>
  );
}

export default App;
