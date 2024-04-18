import React, { useEffect } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import Reveal from 'reveal.js';
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ELeWrapper } from './ui';
import { elementTypes } from '../dashboard/contanst';

const initialState = {
  mouseX: null,
  mouseY: null,
}
export const getGradientColor = (backgroundGradientColor) => {
  if (!backgroundGradientColor) return '';
  return `linear-gradient(${backgroundGradientColor.startDirection || 'to'} ${
    backgroundGradientColor.endDirection || 'right'
  }, ${backgroundGradientColor.startColor || '#fff'}, ${
    backgroundGradientColor.endColor || '#fff'
  })`;
};

export const ELeContainer = (props) => {
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const { children, style = {}, onDoubleClick, zIndex, deleteEle } = props;
  return <ELeWrapper onContextMenu={handleClick} className='sl-block' onDoubleClick={onDoubleClick} style={{ width: `${style.width || 100}%`, height: `${style.height || 30}%`, top: `${style.y}px`, left: `${style.x}px`, fontSize: `${style.fontSize || 1}em`, color: style.color, zIndex }}>
            {children}
            <Menu
              keepMounted
              open={state.mouseY !== null}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={
                state.mouseY !== null && state.mouseX !== null
                  ? { top: state.mouseY, left: state.mouseX }
                  : undefined
              }
            >
              <MenuItem onClick={deleteEle}>Delete</MenuItem>
            </Menu>
  </ELeWrapper>
}

export const RevealDemo = (props) => {
  const { currentPre, setCurrentSlides, curSlides, setCurrentPre, setEditEle } = props;

  const slideChange = (event) => {
    const currentSlides = currentPre.slides.find((it, index) => index === event.indexh);
    setCurrentSlides?.(currentSlides);
  }
  useEffect(() => {
    const deck = new Reveal();
    deck.initialize({
      showSlideNumber: 'all',
      hash: true,
      slideNumber: true,
      progress: false,
      autoSlide: 0,
      plugins: [RevealHighlight]
    })
    deck.addEventListener('slidechanged', slideChange);
    return () => {
      deck.removeEventListener('slidechanged', slideChange);
    }
  }, [currentPre]);

  const deleteElements = (id, elementId) => {
    const newPre = {
      ...currentPre,
      slides: currentPre.slides.map((slide) => {
        if (slide.id === id) {
          return {
            ...slide,
            elements: slide.elements.filter(ele => ele.id !== elementId)
          }
        }
        return slide;
      })
    };
    setCurrentPre(newPre);
  }

  return (
    <div className='reveal'>
      <div className='slides'>
      {
          currentPre?.slides?.map((slide, index) => {
            const { bgColor, blgColor } = currentPre.style;
            const { slibgColor, sliblgColor } = slide.style || {}
            return (<section key={slide.id} data-background-color={slibgColor || bgColor || undefined} data-background-gradient={getGradientColor(sliblgColor) || getGradientColor(blgColor) || undefined}>
              {
                slide.elements.map((element, idx) => {
                  return <>
                    <ELeContainer
                      key={element.id}
                      onDoubleClick={() => {
                        setEditEle({ type: element.type, element })
                      }}
                      style={element.style}
                      zIndex={idx}
                      deleteEle={() => {
                        deleteElements(curSlides.id, element.id)
                      }}
                    >
                        {
                          element.type === elementTypes.Text
                            ? <div className='custom-text' style={{ justifyContent: element.style?.textAlign, fontFamily: element.style?.fontFamily }}>{element.content}</div>
                            : element.type === elementTypes.Image
                              ? <img src={element.content} alt={element.alt || 'picture'} />
                              : element.type === elementTypes.Video
                                ? <video controls src={element.content} autoPlay={element.autoPlay} />
                                : element.type === elementTypes.Code
                                  ? <pre>
                                      <code data-trim data-noescape>{element.content}</code>
                                    </pre>
                                  : <div key={element.id}>{it.content}</div>
                        }

                    </ELeContainer>
                  </>
                })
              }
            </section>)
          })
        }
      </div>
    </div>
  );
};
