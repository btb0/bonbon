import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  function handleForgotPassword() {
      alert('Well, try really hard to remember it because this doesn\'t work yet ):')
  }

  return (
    <>
      <form 
        autoComplete="off" 
        onSubmit={handleSubmit} 
        className="flex-ctr-ctr-col LoginForm"
      >
        <label>Email</label>
        <input 
          className="input" 
          type="email" 
          name="email" 
          value={credentials.email} 
          onChange={handleChange} 
          required 
        />
        <label>Password</label>
        <input 
          className="input" 
          type="password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          required 
        />
        <button 
          className="forgot-password" 
          type="button"
          onClick={handleForgotPassword}>Forgot Password?
        </button>
        <button 
          className="button is-responsive is-rounded login-btn" 
          type="submit"
        >Sign in</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}