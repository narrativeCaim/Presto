import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailWrapper, SideBarWrapper } from './ui';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { RevealDemo } from './reveal';

function Presentation () {
  const { presentationId } = useParams(); // 获取URL中的presentationId参数
  const navigate = useNavigate();
  const [currentPre, setCurrentPre] = React.useState({})
  const [presentations, setPresentations] = useState([]);

  const handleBack = () => {
    navigate('/dashboard'); // 返回仪表板
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5005/store', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json())
      .then(data => {
        setPresentations(data.store);
      });
  }, [])

  useEffect(() => {
    if (presentations.length === 0) return;
    const currentPresentation = presentations.find(item => item.id === presentationId);
    if (!currentPresentation) {
      navigate('/');
    } else {
      // update
      setCurrentPre(currentPresentation);
    }
  }, [presentations])

  return (
    <DetailWrapper className='preview-wrapper'>
      <div className='slide-bar-wrapper'>
        <SideBarWrapper>
          <div className='left'>
            <Button onClick={handleBack}>Back</Button>
            <Input type='text' placeholder='Title' value={currentPre.name} disabled />
          </div>
          <div className='left'>
            <Button onClick={() => {
              navigate(`/dashboard/presentation/${presentationId}`)
            }}>Edit</Button>
          </div>
        </SideBarWrapper>
      </div>
      {/* 添加、删除、编辑幻灯片的控件 */}
      <div style={{ flex: 1 }}>
          {Object.keys(currentPre).length ? <RevealDemo currentPre={currentPre} /> : null}
      </div>
    </DetailWrapper>
  );
}

export default Presentation;
