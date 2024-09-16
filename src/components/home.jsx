import React, { Component } from 'react';
import "../css/home.css";







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
                   
                        <div className="box2-ls">
                            <ul className="ul">
                                <li a href="" className="join">Rates</li>
                                <li className="Apply_for_a_loan">Apply for a loan</li>
                                <li className="Loan_Paymen">Branches & ATMs</li>
                                <li className="Branches_ATMs">For employers</li>
                                <li className="For_Employers">Loan payment</li>
                                <li className="Rate">Join</li>
                            </ul> 
                        </div> 
                        <div className="box2-ls">                    
                             <ul>
                                <li className="Bank">Bank</li>
                                <li className="Borrow">Borrow</li>
                                <li className="Invest_Insure">Invest & Insure</li>
                                <li className="Connect">Connect</li>
                                <li className="Login">Login</li>
                                <li className="Search_icon">Search icon</li>
                            </ul>
                        </div>
                   
                </div>
                <div className="component2_box3">C</div>    
            </div>
            </div>
        );
    }
}
 
export default Home;