import React,{useState} from 'react';
import './JobCard.css';
import './JobDescription'
import JobDescription from './JobDescription';
function JobCard(props)
{
    const details=null;
    const [newDetails,setDetails]=useState(details);
    const Jd_JSX= <JobDescription JD={props.JD} />;
    function popJobDescription() {
      setDetails(newDetails===null ? Jd_JSX : null);
       }
    const st="apply";
    const [status, setStatus] = useState(st);
    const jobApplicationHandler = () => {
        //   alert("applied");
        setStatus("applied");
        props.onApply(status,props.id);
    };
    return(
        <div className='jobCard'>
        <div onClickCapture={popJobDescription}>
            <div className='company_logo'>
                <img src={props.logo} alt=''></img>
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
            {newDetails}
        </div>
        <div className='apply_btn__container'>
        <button type='button' className='apply_btn' onClick={jobApplicationHandler} >{status}</button>
        </div>
        </div>
    );
}

export default JobCard;