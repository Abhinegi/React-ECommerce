import './sign-in-and-sign-up.scss';
import SignUp from "../../Component/sign-up/sign-up.component";
import SignIn from "../../Component/Sign-in/sign-in.component";

const SignInAndSignUp = ()=>{
        return (
            <>
            <div className={'sign-in-and-sign-up'}>
                    <SignIn/>
                    <SignUp/>
            </div>
            </>
        )
    }

export default SignInAndSignUp;