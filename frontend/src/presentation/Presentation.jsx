import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThumbnailTitle, DetailWrapper, SideBarWrapper } from './ui';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { RevealDemo } from './reveal';
import { textConfig, imageConfig, videoConfig, codeConfig, elementTypes } from '../dashboard/contanst';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 } from 'uuid';
import { SettingDrawer } from './SettingDrawer';
import { EditDrawer } from './EditDrawer';
import { Thumbnail } from './Thumbnail';

function Presentation () {
  const { presentationId } = useParams();
  const navigate = useNavigate();
  const [currentPre, setCurrentPre] = React.useState({})
  const [curSlides, setCurrentSlides] = useState({});
  const [presentations, setPresentations] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [editEle, setEditEle] = useState(null);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure?')) {
      const newPre = presentations.filter((it) => {
        return it.id !== presentationId;
      })
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5005/store', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ store: newPre }),
        });

        await response.json();
        if (response.ok) {
          navigate('/dashboard');
        } else {
          window.alert('Save Error')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const save = async () => {
    console.log(currentPre);
    const newPre = presentations.map(it => {
      if (it.id === presentationId) {
        return { ...it, ...currentPre };
      }
      return it;
    })
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5005/store', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ store: newPre }),
      });

      await response.json();
      if (response.ok) {
        navigate('/dashboard');
      } else {
        window.alert('Save Error')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const add = () => {
    const newPreset = {
      ...currentPre,
      slides: [...currentPre.slides, {
        id: v4(),
        style: {},
        elements: [
          {
            id: v4(),
            type: elementTypes.Text,
            style: {},
            content: 'Title'
          }
        ],
      }]
    }
    setCurrentPre(newPreset);
  };
  const deleteSl = () => {
    let _curSlides = { ...curSlides };
    if (Object.keys(_curSlides).length === 0) {
      _curSlides = {
        ..._curSlides.slides[0]
      }
    }
    const newPreset = {
      ...currentPre,
      slides: currentPre.slides.filter((it) => {
        return it.id !== _curSlides.id;
      })
    }
    setCurrentPre(newPreset);
  };

  const addEle = (v) => {
    const newPreset = {
      ...currentPre,
      slides: currentPre.slides.map((it) => {
        if (it.id === curSlides.id) {
          return {
            ...it,
            elements: [...it.elements, v]
          }
        }
        return it;
      })
    }
    setCurrentPre(newPreset);
  };

  const handleClick = (type) => {
    if (type === elementTypes.Text) {
      addEle({ ...textConfig, id: v4() })
    } else if (type === elementTypes.Image) {
      addEle({ ...imageConfig, id: v4() })
    } else if (type === elementTypes.Video) {
      addEle({ ...videoConfig, id: v4() })
    } else if (type === elementTypes.Code) {
      addEle({ ...codeConfig, id: v4() })
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
      setCurrentSlides(currentPresentation.slides[0]);
    }
  }, [presentations])

  return (
    <DetailWrapper className='edit-wrapper'>
      <div className='slide-bar-wrapper'>
        <SideBarWrapper>
          <div className='left'>
            <Button onClick={handleBack}>Back</Button>
            <Input
              type='text'
              placeholder='Title'
              value={currentPre.name}
              onChange={(e) => {
                setCurrentPre({ ...currentPre, name: e.target.value })
              }}
            />
            <ThumbnailTitle>Thumbnail</ThumbnailTitle>
            <Thumbnail currentPre={currentPre} setCurrentPre={setCurrentPre} />
          </div>
          <div className='left'>
            <Button onClick={toggleDrawer(true)}>Setting</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={(save)}>Save</Button>
            <Button
              onClick={() => {
                navigate(`/dashboard/presentation/${presentationId}/preview`)
              }}>
                Preview
              </Button>
          </div>
        </SideBarWrapper>
        <SideBarWrapper>
          <div style={{ width: '100%' }}>
          {
            [elementTypes.Text, elementTypes.Image, elementTypes.Video, elementTypes.Code].map(it => {
              return <div className='sideBarItem' key={it} onClick={() => { handleClick(it) }}>
                {it}
              </div>
            })
          }
          </div>
        </SideBarWrapper>
      </div>
      <div style={{ flex: 1 }}>
          {Object.keys(currentPre).length ? <RevealDemo currentPre={currentPre} setCurrentPre={setCurrentPre} setCurrentSlides={setCurrentSlides} curSlides={curSlides} setEditEle={setEditEle} editEle={editEle} /> : null}
          <div className='action-btn-wrapper'>
            <div className='action-btn' onClick={add}>
              <AddIcon />
            </div>
            {
              currentPre.slides?.length > 1
                ? <div className='action-btn' onClick={deleteSl}>
                  <DeleteIcon />
              </div>
                : null
            }
          </div>
      </div>
      <SettingDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        currentSlides={curSlides}
        currentPre={currentPre}
        setCurrentPre={setCurrentPre}
        setCurrentSlides={setCurrentSlides}
      />
      <EditDrawer visible={!!editEle} editEle={editEle} onClose={() => { setEditEle(null) }} id={curSlides.id} setCurrentPre={setCurrentPre} currentPre={currentPre} />
    </DetailWrapper>
  );
}

export default Presentation;
