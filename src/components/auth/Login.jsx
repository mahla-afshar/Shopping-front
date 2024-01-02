import React , {useState} from 'react';
import './auth.css';


const Login = () => {
    return (
        <div className='auth login'>
        <div className='container'>
          <div className='row align-items-center min-vh-100 auth-res'>
            <div className='col-lg-4 col-md-6 bg-dark py-4 rounded'>
              <div className=' text-center text-white'>
                <h2 className='fw-bold mb-5 auth-title'>
                 Login to account
                </h2>
              </div>
               <form >
                 <div className='form-group mt-3' >
                   <labal htmlFor='' className='text-white mb-2' > User Name</labal>
                   <input 
                   type="text" 
                   className='form-control' 
                   name="email"
                
                   />
                 </div>
               
                 <div className='form-group mt-3' >
                   <labal htmlFor='' className='text-white mb-2' >  Password </labal>
                   <input 
                   type="text" 
                   className='form-control' 
                   name='password'
       
                   />
                 </div>
                 <div className='form-group mt-4'>
                   <button type='submit' className='btn btn-success w-100'>  Login</button>

                 </div>
               </form>

            </div>

          </div>
        </div>
      
      </div>
    );
}

export default Login;
