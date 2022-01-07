import './Login.css';
import NewLogin from './NewLogin';
function Login(props)
{
    const newLoginHandler = (newUser) => {
        const newUserData = {
            ...newUser
        };
        console.log(newUserData);
        props.onLogin(newUserData);
    }
    return(
        <div className='new-login'>
            <NewLogin onNewLogin={newLoginHandler}/>
        </div>
    );
}

export default Login;