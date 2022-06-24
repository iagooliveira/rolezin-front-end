import MainPage from "../MainPage/index.jsx";
import MainHeader from "../MainPage/submodules/MainHeader";
import Footer from "../MainPage/submodules/footer/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return ( 
  <>
  <Router>
    <MainHeader />
    <Switch>
      <Route path='/' exact component={MainPage} />
    </Switch>
    <Footer/>
  </Router>
  </>
  );
};

export default App;
