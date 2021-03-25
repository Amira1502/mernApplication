// import package
import { Switch, Route } from 'react-router';

// import component                  
import Navbar from "./Components/Navbar"

// import pages
import Home from "./Pages/Home/Home"
import ContactList from "./Pages/ContactList/ContactList"
import AddContact from "./Pages/AddContact/AddContact"
import Errors from "./Pages/Errors/Errors"

//  css
import './App.css';

function App() {
  return (
  <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/contacts" component={ContactList}/>
      <Route  path={["/add", "/edit"]} component={AddContact}/>
      <Route  path="/*" component={Errors}/>

    
    </Switch>
    </div>
  );
}

export default App;
