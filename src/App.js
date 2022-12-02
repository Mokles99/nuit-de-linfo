/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products'
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import Shop from './components/Shop';
import {CartProvider} from 'react-use-cart'
import Trainer from './pages/Trainer';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Contact1 from './pages/Contact1';
import {AuthProvider} from './pages/AuthContext'
function App() {
  return (
    <div className="App">  
    <AuthProvider> 

    
    <Router>
            <Footer/>
          
          <Routes>
            <Route exact path="/h" element ={<Home/>} />
            <Route exact path="/p" element ={<Products/>}/>
            <Route exact path="/a"element ={<About/>} />
            <Route exact path="/c" element ={<Contact/>} />
            <Route exact path="/Shop" element ={<Shop/>} />
            <Route exact path="/tr" element ={<Trainer/>} />
            <Route exact path="/sign" element ={<Signin/>} />
            <Route exact path="/signup" element ={<Signup/>} />
            <Route exact path="/c1" element ={<Contact1/>} />
          </Routes>
          
          <Navbar/>
          
    </Router>
    </AuthProvider>
    
    
    </div>
  );
}

export default App;
