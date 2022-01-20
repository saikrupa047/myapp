import './JobDescription.css'
import React,{useState} from 'react';
function JobDescription(props)
{
   
    return(<div className='JD'>
        <div >
        {props.JD}
        </div>
    </div>);
}

export default JobDescription;