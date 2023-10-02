import React, {Component,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

function CreateEmployeeComponent() 
{
    let navigate=useNavigate();

        const[employee,setEmployee] =useState({
            firstName:"",
            lastName:"",
            email:""
        })

        const handleClick=(e)=>
        {
            const name=e.target.name;
            const value=e.target.value;
            setEmployee({... employee,[name]:value});
        }

        const saveHandler=(e)=>
        {
            e.preventDefault();
            console.log("employee =>"+JSON.stringify(employee));
            EmployeeService.createEmployee(employee).then(res=>
                {
                    navigate('/employees');
                })
        }

        const cancelHandler=()=>
        {
            navigate('/employees')
        }


  return (
    <div className ="container">
        <div className ="row">
            <div className="card">
                <h3 className="text-center my-3"><u>*Add Employee*</u></h3>
                <div className="card-body">
                    <form>
                        <div className="form-group my-3">
                            <label>First Name</label>
                            <input type= "text" placeholder='first name' name='firstName' className="form-control"
                             value={employee.firstName} onChange={handleClick}></input>
                            <div className="form-group my-2">
                            <label>Last Name</label>
                            <input type= "text" placeholder='last name' name='lastName' className="form-control" 
                            value={employee.lastName} onChange={handleClick}></input>
                            </div>
                            <div className="form-group my-2">
                            <label>Email</label>
                            <input type= "text" placeholder='email' name='email' className="form-control"
                             value={employee.email} onChange={handleClick}></input>
                            </div>
                            <button className="btn btn-success my-3" onClick={saveHandler}>Save</button>
                            <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={cancelHandler}>Cancel</button>                        
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default CreateEmployeeComponent