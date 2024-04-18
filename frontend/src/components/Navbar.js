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
          // 登出成功，清除本地存储的令牌
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          // 处理错误情况
          const data = await response.json();
          alert(data.error || 'Logout failed');
        }
      } catch (error) {
        // 网络或其他错误处理
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
