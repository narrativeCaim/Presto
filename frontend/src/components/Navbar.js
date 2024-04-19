import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from './ui';

function Navbar () {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('http://localhost:5005/admin/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (response.ok) {
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          const data = await response.json();
          alert(data.error || 'Logout failed');
        }
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  };

  return (
        <nav>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </nav>
  );
}

export default Navbar;
