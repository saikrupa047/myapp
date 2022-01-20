import './Profile.css';
import React,{useState} from 'react';

const Profile = (props) => 
{
    const form=<div></div>;
    const [newForm,showForm]=useState(form);
    const [newDetails,addNewDetails]=useState([]);
    const showDetailsHandler = (event) =>
    {
        showForm(null);
            // console.log(event);
            const data=[...event.target];
            // const dataNames=data.map(item=>item.name);
            // const dataValues=data.map(item=>item.value);
            // const dataItems=data.map(item => [item.name,item.value]);
            addNewDetails(
               data.map((item,index) => <div className='email' key={index} >{item.name}<br/>{item.value}</div>)
            )
            // console.log(dataNames);
            // console.log(dataValues);
            // console.log(dataItems);

    };
    const addDetailsHandler = () =>
    {
        showForm(
            // name,phn no, resume, skills, Date of Birth, Gender, Category
            <div className='form__container'>
                <form onSubmit={showDetailsHandler}>
            <div className='detail'>
                Name:<br/>
                <input type='text' placeholder='enter your name' className='input__box' name='Name:'/>
            </div>
            <div className='detail'>
                Phone No:<br/>
                <input type='numeric' placeholder='exclude country code' minLength={10} maxLength={10} className='input__box' name='Phone No:'/>
            </div>
            <div className='detail'>
                skills:<br/>
                <input type='text' placeholder='enter your skills' className='input__box' name='skills:' />
            </div>
            <div className='detail'>
                Date of Birth:<br/>
                <input type='date' className='input__box' name='Date of Birth:' />
            </div>
            <div className='detail'>
                <input type='submit' className='add-btn' />
            </div>
            </form>
            </div>
        );
    }
        return(
            <div>
                <div className='primary_data'>
                    <h2>Primary Details</h2>
                    <div className='email'>
                    {props.user.email}
                    </div>
                    {newDetails}
                </div>
                <div className='add-btn__container'>
                <button className='add-btn' onClick={addDetailsHandler}>Add Details</button>
                </div>
                {newForm}
            </div>
            );
}

export default Profile;