import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Presentation () {
  const { presentationId } = useParams(); // 获取URL中的presentationId参数
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard'); // 返回仪表板
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      // 从localStorage获取当前存储的演示文稿数组
      const savedPresentations = localStorage.getItem('presentations');
      let presentations = savedPresentations ? JSON.parse(savedPresentations) : [];

      // 过滤掉要删除的演示文稿
      presentations = presentations.filter(p => p.id.toString() !== presentationId);

      // 更新localStorage
      localStorage.setItem('presentations', JSON.stringify(presentations));
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <h1>Presentation: {presentationId}</h1>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleDelete}>Delete Presentation</button>
      {/* 添加、删除、编辑幻灯片的控件 */}
    </div>
  );
}

export default Presentation;
