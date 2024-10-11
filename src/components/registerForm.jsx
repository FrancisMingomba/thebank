import React, { Component } from 'react';
import "../css/registerForm.css";
import Input from './input';


class LoginForm extends Component {

    state = {
        account: { username: "", password:""}
    };

    handleSubumit = e => {
        e.prenventDefault();
        //call the server
        console.log('Submit');
    };

    handleChange = ({ currentTarget: input }) => {

        const account = { ...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    };
    render(){ 
        const  { account } = this.state;
        return (
            <div className="auto-form-container">
                <h1 className="login-text">Login </h1>
                 <form className="form" onSubmit={this.handleSubmit}>
                   <Input 
                  
                     name="username"
                     value={account.username}
                     label="Username"
                     onChange={this.handleChange}

                    />
                     <Input                 
                     name="password"
                     value={account.password}
                     label="Password"
                     onChange={this.handleChange}
                   />
                    
                     <Input                 
                     name="email"
                     value={account.password}
                     label="email"
                     onChange={this.handleChange}
                   />
                   
                    <button className="btn btn-primary">Login</button>                
                 </form>    
             </div>
            );
        }
    }

 
export default LoginForm;