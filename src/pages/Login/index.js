import React, { useState } from 'react';

import api from '../../services/api'

// import { Container } from './styles';

function Login({ history }) {

  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/sessions',{ email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
    
    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong>  para programadores e encontre <strong>talentos</strong> para sua empresa.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input type="email" id="email" placeholder="Seu email" onChange={e => setEmail(e.target.value)}/> 


        <button type="submit" className="btn">Entrar</button>
      </form>
    </>
  );
}

export default Login;