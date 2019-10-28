import React, { useState } from "react";
import Layout from '../core/Layout';
import {API} from '../config';
import {signup} from '../auth';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    Password: '',
    error: '',
    success: false,
  })

  const { name, email, password, success, error } = values


  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }



  const clickSubmit = (event) => {
    console.log("I m here");
    event.preventDefault();
    setValues({...values, error: false })
    signup({ name, email, password })
    .then(data => {
      console.log("data");
      console.log(data.error);
      if(data.error) {
        setValues({ ...values, error: data.error, success: false })
      }
      else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        });
      }
    })

  }

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange('name')}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange('email')}
          type="text"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange('password')}
          type="text"
          className="form-control"
          value={password}
        />
      </div>

      <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
    </form>
  )

  const showError = () => (<div className="alert alert-danger" style={{display: error ? '' : 'none'} }>{error}</div>);

  const showSuccess = () => (<div className="alert alert-info" style={{display: success ? '' : 'none'} }> New account is created. Please signin</div>);

  return (
    <Layout title="Sign Up Page" description="Sign Up to React E-Commerce App">
      {showSuccess()}
      {showError()}
      { signUpForm() }
      {JSON.stringify(values)}
    </Layout>
  )
};

export default Signup;
