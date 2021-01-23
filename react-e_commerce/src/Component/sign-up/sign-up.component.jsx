import React from 'react';
import FormInput from "../form-input/form-input.component";
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    submitHandler = async (e) => {
        e.preventDefault();
        if (this.state.password != this.state.confirmPassword) {
            alert('Password doesnt match!!')
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            await createUserProfileDocument(user, ...this.state.displayName);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            alert('User Successfully Register :) ')
        } catch (error) {
            alert(error.message)
        }
    }


    render() {
        return (
            <>
            <div className="sign-up">
                <h2>I don't have an account </h2>
                <span>Sign up with your email id and password </span>

                <form onSubmit={this.submitHandler} >
                    <FormInput
                        changeHandler={(e) => this.setState({displayName: e.target.value})}
                        label='Display Name'
                        required
                        name='Display Name'
                        value={this.state.displayName}
                        type='text'>
                    </FormInput>
                    <FormInput
                        changeHandler={(e) => this.setState({email: e.target.value})}
                        label='Email'
                        required
                        name='email'
                        value={this.state.email}
                        type='email'>
                    </FormInput>
                    <FormInput
                        changeHandler={(e) => this.setState({password: e.target.value})}
                        label='Password'
                        required
                        name='password'
                        value={this.state.password}
                        type='password'>
                    </FormInput>
                    <FormInput
                        changeHandler={(e) => this.setState({confirmPassword: e.target.value})}
                        label='Confirm Password'
                        required
                        name='Confirm Password'
                        value={this.state.confirmPassword}
                        type='password'>
                    </FormInput>

                    <CustomButton type="submit" value="Submit Form"> Sign Up </CustomButton>
                </form>
                </div>
            </>
        )
    }
}

export default SignUp;