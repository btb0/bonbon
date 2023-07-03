import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [formState, setFormState] = useState('LOGIN');

  function handleClick() {
    setFormState(formState === 'LOGIN' ? 'SIGNUP' : 'LOGIN');
  }

  return (
    <main className='AuthPage'>
      <section className='main-container-auth flex-ctr-ctr'>
        <div className='column is-half image-div-auth flex-ctr-ctr'>
          {/* IMAGE SECTION */}
        </div>
        <div className='column is-half flex-ctr-ctr-col form-div-auth'>
          <div className="title-container flex-ctr-ctr-col">
            <h1 className='bonbon-h1'>bonbon+</h1>
          </div>
          <div className="form-container">
            {
              formState === 'LOGIN' ? 
              <LoginForm setUser={setUser} />
              :
              <SignUpForm setUser={setUser} />
            }
          </div>
          <div className="toggle-container flex-ctr-ctr">
            <p className='toggle-question'>
              {
                formState === 'LOGIN' ? "Don't have an account?" : "Already have an account?"
              }
            </p>
            <p onClick={handleClick} className='toggle-auth'>
              {
                formState === 'LOGIN' ? 'Create Account' : 'Sign in'
              }
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}