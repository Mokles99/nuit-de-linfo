 import React from 'react'
 import BannerImage from '../assets/home1.jpg'
 import '../styles/Contact.css'
 import useState from 'react-hook-use-state';
 
 function Contact() {
  //new1
    const [value, setValue] = useState({
      userName: "",
      email: "",
      password: "",
    });
    const [state, setState] = useState(1);
  
    function handleUserName(event) {
      setValue({ ...value, userName: event.target.value });
    }
    function handleEmail(event) {
      setValue({ ...value, email: event.target.value });
    }
    function handlePassword(event) {
      setValue({ ...value, password: event.target.value });
    }
  
    function mouseOver() {
      if (state === 1) {
        setState((prevVal) => (prevVal += 1));
      } else if (state === 2) {
        setState((prevVal) => (prevVal += 1));
      } else if (state === 3) {
        setState((prevVal) => (prevVal -= 2));
      }
    }
  
    var mystyle = {
      left:
        state === 1 ? "0px" : state === 2 ? "200px" : state === 3 ? "450px" : "",
  
      position: value.password.length < 8 && "absolute",
    };

    ///neww1
   return (

    ///new2

    <div className="outer-container">
      <div className="form-container">
        <form action="">
          <div>
            <input
              onChange={handleUserName}
              value={value.userName}
              type="password"
              placeholder="username"
              className="input"
              name="username"
            />
          </div>
          <div>
            <input
              onChange={handleEmail}
              value={value.email}
              type="date"
              placeholder="Email"
              className="input"
              name="email"
            />
            <label htmlFor="password" className="password_label">
              your email
            </label>
          </div>
          <div>
            <input
              onChange={handlePassword}
              value={value.password}
              type="text"
              placeholder="Password"
              className="input"
              name="password"
            />
            <label htmlFor="password" className="password_label">
              easy to hack
            </label>
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn "
              onMouseOver={mouseOver}
              style={mystyle}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );



     <div className='contact'>
        <div className='leftSide' style={{backgroundImage:'url('+BannerImage+')'}} > </div>
        <div className='rightSide'>
        <h1> Contact Us</h1>

<form id="contact-form" method="POST">
  <label htmlFor="name">Full Name</label>
  <input name="name" placeholder="Enter full name..." type="password" />
  <label htmlFor="email">Email</label>
  <input name="email" placeholder="Enter email..." type="date" />
  <label htmlFor="message">Message</label>
  <textarea
    rows="6"
    placeholder="Enter message..."
    name="message"
    required
  ></textarea>
  <button type="submit"> Send Message</button>
</form>

             </div>
     </div>
   
 } 
 
 export default Contact