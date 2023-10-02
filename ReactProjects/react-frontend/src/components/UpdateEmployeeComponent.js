import {useEffect, useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

export default function UpdateEmployeeComponent(props)
{
    let navigate=useNavigate();

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName] =useState("");
    const [email,setEmail]= useState("");
    const {id}=useParams();


    useEffect(()=>
    {
        EmployeeService.getEmployeeById(id).then(res=>
            {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            }).catch(error=>
                {
                    console.log(error);
                })
    },[])

    const updateHandler=(e)=>
    {
        e.preventDefault();
        const employee={firstName,lastName,email};

        if(id)
        {
            EmployeeService.updateEmployee(id,employee).then(res=>
                {
                    navigate('/employees');
                });
        }
        else{
            EmployeeService.createEmployee(employee).then(res=>{
                console.log(res.data);
                navigate('/employees');
            })
        }
    }
    const cancelHandler=()=>
    {
        navigate('/employees');
    }
    return(
        <div className='container my-4'>
            <div className='row'>
                <div className='card'>
                                <h3 className='text-center my-2'><u>*Update Employee*</u></h3>
                                <div className='card-body my-2'>
                                    <form>
                                        <div className='form-group my-3'>
                                            <label>First Name</label>
                                            <input type='text' placeholder='first name' name='firstName' className='form-control'
                                            value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                                        </div>
                                        <div className='form-group my-3'>
                                            <label>Last Name</label>
                                            <input type='text' placeholder='last name' name='lastName' className='form-control'
                                            value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                                        </div>
                                        <div className='form-group my-3'>
                                            <label>Email</label>
                                            <input type='text' placeholder='email' name='email' className='form-control'
                                            value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                        </div>
                                        <button className='btn btn-success my-2' onClick={updateHandler}>Save</button>
                                        <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:'15px'}}>Cancel</button>
                                    </form>
                                </div>
                </div>

            </div>

        </div>
    )
}