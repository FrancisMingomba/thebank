import React, { Component } from 'react';
import "../css/home.css";
import { FaSearch } from "react-icons/fa";
import { PiWalletDuotone } from "react-icons/pi";
import { PiCarDuotone } from "react-icons/pi";
import { PiHouseLineDuotone } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";
import { PiIdentificationCardDuotone } from "react-icons/pi";
import { PiChatCircleDotsDuotone } from "react-icons/pi";
import LAPTOP from "../images/laptop.jpg";
import AUTO from "../images/auto.jpg";
import FREECHECKING from "../images/free-checking-image.jpg";
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import IMAGE1 from "../images/image1.jpg";
import { NavLink , Link } from  "react-router-dom";
//import loginForm from "./loginForm";






class Home extends Component {
  
    render() { 
        
        const handleClick = () => {
            console.log("login form");
            <loginForm />
          
            
        }


        return (
            <div className="body"> 
                 <div className="component1">            
                    <div className="banner">Information here</div>
                 </div> 
                 <div className="component2">
                     <div className="component2_box1">Logo here</div>
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
                        <nav className="component2_grid">
     
                            <Link  className="nav-item" to="/">
                                 <div className="grid"><p className="text_color">Bank</p></div>
                            </Link>
     
                            <NavLink  className="nav-item" to="/" >
                                 <div className="grid"><p className="text_color">Borrow</p></div>
                            </NavLink>
                           <NavLink  className="nav-item" to="/">
                                 <div className="grid"><p className="text_color">Invest & Insure</p></div>
                           </NavLink >
                           <NavLink  className="nav-item"  to="/login">  
                                 <div className="grid"><p className="text_color">Connect</p></div>
                           </NavLink>                         
                           
                                <div>
                                   
                                    <div className="grid"><p className="text_color">Login</p></div> 
                                    <botton onClick={handleClick}>
                                    </botton>
                                </div>
                                 
                                    
                            
                            <div className="search_icon_div nav-link">< FaSearch className="search_icon" size={25} color="rgb(7, 116, 59)" /> </div>                                          
                        </nav>
                     </div>
                    <div className="component2_box3">C</div>    
                  </div>
                  <div className="component3">
                        <div className="component3_inner">
                            <div className="component3_inner1"> 
                                <p className="p p1 margin">Have an auto loan elsewhere?</p>
                                <p className="p margin">When you refinance your loan to Credit Union</p>
                                <ul>
                                    <li className="p margin line-space">Get a $100 $200 cash bonus when you refinance by July 01, 2024</li>
                                    <li className="p margin line-space">Get a $100 $200 cash bonus when you refinance by Jujy 01, 2024</li>
                                    <li className="p margin line-space">Get a $100 $200 cash bonus when you refinance by July 01, 2024</li>
                                </ul>
                                <div className="get-started"><p className="p-get-started">Get Started</p></div>
                            </div>
                            <div className="component3_inner2">
                            <div className="auto-image-container"><img className="auto-image" src={AUTO} alt="" /></div>
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
                                <p className="p p1">Free Checking</p>
                                <p className="p p2">Whth all of the conveniences you expert</p>
                                <ul className="ul1">
                                    <li className="p">Get a $100 $200 cash bonus when you refinance by July 01, 2024</li>
                                    <li className="p">Get a $100 $200 cash bonus when you refinance by Jujy 01, 2024</li>
                                    <li className="p">Get a $100 $200 cash bonus when you refinance by July 01, 2024</li>
                                    <li className="p">Get a $100 $200 cash bonus when you refinance by Jujy 01, 2024</li>
                                    <li className="p">Get a $100 $200 cash bonus when you refinance by July 01, 2024</li>
                                </ul>
                                <div className="get-started"><p className="p-get-started">Get Started</p></div>
                                </div>
                                <div className="component5_inner2">
                                <div className="free-checking-image"><img className="auto-image" src={FREECHECKING} alt="" /></div>
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
                                    <div className="social_box">
                                    <TfiFacebook className="facebook" />
                                    </div>
                                    <div className="social_box">
                                    <BsInstagram />
                                    </div>
                                    <div className="social_box">
                                    <ImLinkedin2 />
                                    </div>
                                    <div className="social_box">
                                    <RiTwitterXFill />
                                    </div>
                                </div>
                             
                           </div>                   
                            <div className="component9_div ">
                                 <div className="vertical-line"></div>
                            </div>                                                 
                        </div>                    
                    </div>
                    <div  className="component9_inner">
                        <div className="container">                           
                            <div className="box b-one">
                            <div id="image1-div"><img id="footer-image1" src={IMAGE1} alt="" /></div>
                            </div>
                            <div className="box b-two">
                            <div id="image1-div"><img id="footer-image2" src={IMAGE1} alt="" /></div>
                            </div>
                            <div className="box b-three">
                            <div id="image1-div"><img id="footer-image3" src={IMAGE1} alt="" /></div>
                            </div>
                            <div className="box b-four">D</div>
                        </div>                    
                    </div>
                </div>            
            </div>                                                                            
        );
    }
}
 
export default Home;