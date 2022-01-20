import './Content.css';

function Content(props)
{
    const classes= 'contentWrapper ' + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Content;
