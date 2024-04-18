import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledForm, StyledInput, StyledButton, StyledError } from './ui';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5005/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.error || 'Invalid input');
      }
    } catch (error) {
      setError('Server error');
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label>
        <StyledInput
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">password:</label>
        <StyledInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <StyledButton type="submit">login</StyledButton>
      </StyledForm>

      {error && <StyledError>{error}</StyledError>}
    </div>
  );
}

export default Login;
