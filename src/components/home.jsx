import React, { Component } from 'react';
import "../css/home.css";
import { FaSearch } from "react-icons/fa";
//import { NavLink } from 'react-router-dom';
import { PiWalletDuotone } from "react-icons/pi";
import { PiCarDuotone } from "react-icons/pi";
import { PiHouseLineDuotone } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import { PiChatCircleDotsDuotone } from "react-icons/pi";
import LAPTOP from "../images/laptop.jpg";


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
                            </ul>   
                        </div>                   
                        <div className="component2_grid">
                            <div className="grid"><p className="text_color">Bank</p></div>
                            <div className="grid"><p className="text_color">Borrow</p></div>
                            <div className="grid"><p className="text_color">Invest & Insure</p></div>
                            <div className="grid"><p className="text_color">Connect</p></div>
                            <div className="grid"><p className="text_color">Login</p></div> 
                            <div className="search_icon_div">< FaSearch className="search_icon" size={25} color="rgb(7, 116, 59)" /> </div>                                          
                        </div>
                     </div>
                    <div className="component2_box3">C</div>    
                  </div>
                  <div className="component3">
                        <div className="component3_inner">
                            <div className="component3_inner1"> 
                                <p>div 1</p>
                            </div>
                            <div className="component3_inner2">
                               <div className="img1">
                                </div>
                            </div>
                            
                        </div>
                  </div>
                  <div className="component4">              
                     <div className="container2_boxes">
                            < PiWalletDuotone  className="wallet" />
                            <p class="container2_boxes_text">Checkin Acconut</p>                     
                       </div>
                       <div className="container2_boxes">                    
                            < PiCarDuotone  className="wallet" />
                            <p class="container2_boxes_text">Auto Loans</p>                   
                        </div>
                        <div className="container2_boxes">                     
                            < PiHouseLineDuotone  className="wallet" />
                            <p class="container2_boxes_text">Mortgage Loan</p>                       
                        </div>
                        <div className="container2_boxes">                      
                            < GiNetworkBars  className="wallet" />
                            <p class="container2_boxes_text">Money Markets</p>                      
                        </div>
                        <div className="container2_boxes">                                   
                           <  PiIdentificationCardDuotone  className="wallet" />
                          <p class="container2_boxes_text">Financial Education</p>                      
                       </div> 
                       <div className="container2_boxes">                    
                            <  PiChatCircleDotsDuotone className="wallet" />
                           <p class="container2_boxes_text">Feedback</p>                                                 
                        </div>                                          
                      </div >
                      <div className="component5">
                        <div className="component5_inner">
                                <div className="component5_inner1"> 
                                    <p>div 1</p>
                                </div>
                                <div className="component5_inner2">
                                    <div className="img1">
                                </div>
                                </div>                           
                            </div>
                      </div> 
                    <div className="component6">
                            <div className="other">
                            <h1 className="p-other">Image here...</h1>
                    </div>
                </div >  
                <div className="component7">
                    <div className="news-annocements"><p className="news_annocements">News & Annocements</p></div>  
                </div>  
               
                <div className="component8">
                    <div className="component8_inner">

                    <div className="laptop-image_div"><img className="laptop-image" src={LAPTOP} alt="" /></div>
                         <div className="p_box">
                            <p className="p1">Advantureland tickets</p>
                            <p className="p2">Discounted tickets are here  </p> 
                            <p className="p3">Advanturelands tickets Advanturelands tickets Advanturelands tickets Advanturelands</p>
                            <p className="p3">Advanturelands tickets Advanturelands tickets $20.99.</p>                      
                        </div>
                        <div className="learn_more">Learn more</div>                 
                    </div>
                </div> 
                <div className="component9">                  
                    <div  className="component9_inner">
                        <div className="component9_inner_one">
                            <div className="component9_div ">
                                <div className="footer_list">
                                     <ul  className="footer_list1">                      
                                        <li className="footer_item"><a href="/#">Privacy Policy</a></li>
                                        <li className="footer_item"><a href="/#">Terms & Condition</a></li>
                                        <li className="footer_item"><a href="/#">Helps & Support</a></li>
                                        <li className="footer_item"><a href="/#">Contact us</a></li>                       
                                     </ul>
                                </div>
                                <div className="follow">
                                    <p className="follow_us">Follow us</p>
                                </div>
                                <div className="social_media">
                                    <div className="social_box">1</div>
                                    <div className="social_box">2</div>
                                    <div className="social_box">3</div>
                                    <div className="social_box">4</div>
                                </div>
                                <div className="footer_bottom">
                                    &copy;2024
                                </div>
                           </div>
                           

                           
                    
                            <div className="component9_div ">
                                 <div className="vertical-line"></div>
                            </div> 
                                                  
                        </div>
                     
                    </div>
                    <div  className="component9_inner">
                        <div className="component9_inner2">
                            <div  className="component9_inner2_box">A</div>
                            <div  className="component9_inner2_box">B</div>
                            <div  className="component9_inner2_box box_three">C</div>
                            <div  className="component9_inner2_box box_four">D</div>
                        </div>
                    </div>

                </div>            
            </div>                                                                            
        );
    }
}
 
export default Home;