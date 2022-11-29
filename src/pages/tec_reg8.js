import React from "react";
import badminton from './images/badminton.jpg';
import { Link } from "react-router-dom";
import './css/style2.css';
function Tec_reg8(){
  return(
    <div className="b">
        <div className="a">
          <h1>BADMINTON (SINGLES)</h1>
          <p id="a">
            RULES: <br /><br />
            The game is 21 points system. Every match is a knock-out. Points will be allocated according to Fault mentioned below.
          </p>
          <p id="d">
            1. Over the Net Fault
            <br />2. Service Fault
            <br />3. Receiver Fault
            <br />4. Doubles Hit<br />
            <br />VENUE: SKCET CAMPUS
            <br />TIMING: 11 AM TO 2 PM
          </p>
        </div>
        <div className="c">
          <img id="b" src={badminton} alt="" />
          <br />
          <div className="z">

<button id="tecbut"><a href="regs1.html">Register</a></button>
<div className="overlay"><form>  
        <h1 className="hed"> Student Registration Form</h1>
        <hr />  
        <div className="container">  
          <label> Firstname: </label><br />
          <input id="in" type="text" name="firstname" defaultValue="Balamurugan" placeholder="Firstname" size={15} required />   <br />
          <label> Lastname: </label>    <br />
          <input id="in" type="text" name="lastname" defaultValue="M" placeholder="Lastname" size={15} required />   <br />
          <div>  
            <label>   
              Course :  
            </label>   
            <select>  
              <option value="AI">AI &amp; DS</option>  
              <option value="Course">Course</option>  
              <option value="CSE">CSE</option>  
              <option value="IT">IT</option>  
              <option value="ECE">ECE</option>  
              <option value="EEE">EEE</option>  
              <option value="MECH">MECH</option>  
              <option value="CIVIL">CIVIL</option>
            </select>  
          </div>  
          <div>  
            <label>   
              Gender :  
            </label> 
            <input type="radio" defaultValue="Male" name="gender" defaultChecked /> Male   
            <input type="radio" defaultValue="Female" name="gender" /> Female   
            <input type="radio" defaultValue="Other" name="gender" /> Other  
            <br /><br />
            <label>   
              Phone :  
            </label>  <br />
            <input type="text"  name="country code" style={{width:'2%'}} id="in" placeholder="Country Code" defaultValue={+91} size={2} className="num" />   
            <input type="text" name="phone" id="in" className="num1" defaultValue={9363423876} placeholder="phone no." size={10} required />  <br />
            <label htmlFor>Current Address : </label><br />
            <input type="text" id="in"  defaultValue="No.18 East Street,Panruti,Cuddalore District-607103" /><br />
            <label htmlFor="email"><b>Email</b></label>  <br />
            <input type="text" id="in" defaultValue="727721euai011@skcet.ac.in" placeholder="Enter Email" name="email" required />  <br />
          </div>  
          <input type="checkbox" id="in" required /><label id="le" htmlFor>I confirmed my details</label><br /><br />
          <a href="main.html"><button type="submit" className="registerbtn" ><Link to="/main">Register</Link></button></a>
        </div></form></div>
  </div>
</div>
      </div>
  );
}
export default Tec_reg8;