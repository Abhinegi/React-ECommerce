import React from 'react';
import FormInput from '../../Component/form-input/form-input.component';
import './sign-in.scss';
import CustomButton from '../../Component/custom-button/custom-button.component';
import {auth ,signInWithGoogle} from '../../firebase/firebase.util';
import {connect} from 'react-redux';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler =  async event => {
        event.preventDefault();
        try{
        await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        this.setState({email:'',password:''});
        alert("Successfully logged in!! ");
        }
        catch(error){
            alert(error)
        }
    }

    render() {
        return (
            <>
                <div className="sign-in">
                    <h2> I already have an account</h2>
                    <span>Sign in with your email id and password </span>
                    <form onSubmit={this.submitHandler}>
                        <FormInput
                            changeHandler={(e) => this.setState({email: e.target.value})}
                            label='email'
                            required
                            name='email'
                            value={this.state.email}
                            type='email'>
                        </FormInput>

                        <FormInput
                            changeHandler={(e) => this.setState({password: e.target.value})}
                            label='password'
                            required
                            name='password'
                            value={this.state.password}
                            type='password'>
                        </FormInput>

                        <CustomButton type="submit" value="Submit Form"> Sign In </CustomButton>
                        <CustomButton type="button" value="Submit Form" onClick={signInWithGoogle}> Sign In With
                            Google </CustomButton>
                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(SignIn);