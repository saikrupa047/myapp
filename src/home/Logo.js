import './Logo.css';

function Logo(props)
{
    return(
        <div>
            <img src={props.logo} alt="" className="logo"></img>
        </div>
    );
}

export default Logo;