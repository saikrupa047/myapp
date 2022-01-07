import './JobCard.css';

function JobCard(props)
{
    return(
        <div className='jobCard' onClick={popJobDescription}>
            <div className='company_logo'>
                {props.logo}
            </div>
            <div className="role">
            <label  name="jobRole">{props.role}</label>
            </div>
            <div className="company">
            <label name="CompanyName"><strong>Company Name: </strong>{props.company}</label>
            </div>
            <div className="company">
            <label name="Compensation"><strong>Compensation: </strong>{props.compensation}</label>
            </div>
            <div className="company">
            <label name="Location"><strong>Location: </strong>{props.location}</label>
            </div>
        </div>
    );
}

function popJobDescription()
{
    return(
        <div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
    );
}
export default JobCard;