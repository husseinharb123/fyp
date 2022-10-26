import React from 'react'
import {Link} from 'react-router-dom'
import './signup.scoped.css'
export default function Signup() {
  return (
    <>
    
    
    
    
<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
             Already registered? <Link to="#" className='mycolin'>Sign In</Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          <p className="forgot-password text-right mt-2">
            By signing uo, you agree to our Terms of Use and Privacy Policy.
          </p>
          </div>
        </div>
      </form>
    </div>
    
    
    
    
    
    
    
    </>
  )
}
