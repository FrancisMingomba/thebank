import React, { Component } from 'react';
import "../css/loginForm.css";
import Input from './input';


class LoginForm extends Component {

    state = {
        account: { username: "", password:""}
    };

     Modal = ({open}) => {
        if (!open) return null;

    }

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
                    <button className="btn btn-primary">Login</button>
                   <p>Forgotten password</p>                   
                 </form>    
             </div>
            );
        }
    }

 
export default LoginForm;