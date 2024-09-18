import React, { Component } from 'react';
import "../css/home.css";
import { FaSearch } from "react-icons/fa";
//import { NavLink } from 'react-router-dom';


class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="body"> 
                 <div className="component1">            
                    <div className="banner">Information here</div>
                 </div> 
                <div className="component2">
                     <div className="component2_box1">A</div>
                     <div className="component2_box2">
                        <div className="ls">
                            <ul className="ul">
                                <li className="join"><a href="http://www.google.com">Rates</a></li>
                                <li className="Apply_for_a_loan"><a href="http://www.google.com">Apply for a loan</a></li>
                                <li className="Loan_Paymen"><a href="http://www.google.com">Branches & ATMs</a></li>
                                <li className="Branches_ATMs"><a href="http://www.google.com">For employers</a></li>
                                <li className="For_Employers"><a href="http://www.google.com">Loan payment</a></li>
                                <li className="Rate"><a href="http://www.google.com">Join</a></li> 
                                <li className="Rate"><a href="http://www.google.com">Join</a></li>                               
                            </ul>   
                        </div>                   
                        <div className="component2_grid">
                            <div className="grid">Bank</div>
                            <div className="grid">Borrow</div>
                            <div className="grid">Invest & Insure</div>
                            <div className="grid">Connect</div>
                            <div className="grid">Login</div>   
                            < FaSearch size={20} color="rgb(42, 226, 131)" />               
                        </div>
                     </div>
                    <div className="component2_box3">C</div>    
                 </div>
            </div>
        );
    }
}
 
export default Home;