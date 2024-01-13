import React , {useState} from 'react';
import './auth.css';
import axios from 'axios';
import swal from 'sweetalert2';



const Register = () => {
 
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] =useState([]);

  const handSubmit = async(e) =>{
    e.preventDefault();
    const data ={
      name,
      email,
      password
    }
    console.log(data)

  await  axios.post("http://localhost:8000/spi/register", data,{
    headers:{
       "Content-Type" : "application/json" ,
       "Accept" : "application/json"
    }
  })
  .then(res =>{
    if(res.data.status ===200){
      swal.fire({
        icon:"success",
        title:"congragulation",
        text:res.data.message,
        showConfirmButton:true,
        confirmButtonText:"تایید",
          timer:5000,
      })

    }else{
      setError(res.data.validatim_error)
    }
  })
  .catch(err =>{
    console.log(err);
  })
  }


    return (
        <div className='auth register'>
        <div className='container'>
          <div className='row align-items-center min-vh-100 auth-res'>
            <div className='col-lg-4 col-md-6 bg-dark py-4 rounded'>
              <div className=' text-center text-white'>
                <h2 className='fw-bold mb-5 auth-title'>
              Register
                </h2>
              </div>
              <form  onSubmit={handSubmit} >
                <div className='form-group mt-3' >
                  <labal htmlFor='' className='text-white mb-2' >   UserName </labal>
                  <input
                    type="text"
                    className='form-control mb-1'
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    
                   
                  />
                  {
                    error && <small className='text-danger mt-2' >{error.name}</small>
                  }
                 
                </div>
                <div className='form-group mt-3'>
                  <labal htmlFor='' className='text-white mb-2' > Email </labal>
                  <input
                    type="text"
                    className='form-control mb-1'
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
               
                  />
      {
                    error && <small className='text-danger mt-2' >{error.email}</small>
                  }
                 
                </div>
                <div className='form-group mt-3' >
                  <labal htmlFor='' className='text-white mb-2' >  Password </labal>
                  <input
                    type="text"
                    className='form-control mb-1'
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                   
                  />
                        {
                    error && <small className='text-danger mt-2' >{error.password}</small>
                  }
               
                </div>
                <div className='form-group mt-4'>
                  <button type='submit' className='btn btn-success w-100'> Register </button>
  
                </div>
              </form>
  
            </div>
  
          </div>
        </div>
  
      </div>
    );
}

export default Register;
