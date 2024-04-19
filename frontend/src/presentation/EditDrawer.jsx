import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { LabelTitle, FormRow } from './ui';
import { Input, Button } from '@mui/material';
import CustomColors from './CustomColor';
import BasicSelect from './Select';
import Radio from '@mui/material/Radio';
import Textarea from '@mui/joy/Textarea';
import { elementTypes } from '../dashboard/contanst';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const EditDrawer = (props) => {
  const { visible, onClose, editEle, id, setCurrentPre, currentPre } = props;
  const { type, element } = editEle || {};
  // eslint-disable-next-line no-debugger
  //   debugger
  const [state, setState] = React.useState({});
  useEffect(() => {
    if (element) {
      setState(element);
    }
  }, [element])

  const onConfirm = () => {
    console.log(state);
    const newCurrentPre = {
      ...currentPre,
      slides: currentPre.slides.map((slide) => {
        if (slide.id === id) {
          return {
            ...slide,
            elements: slide.elements.map(ele => {
              if (ele.id === state.id) {
                return {
                  ...ele,
                  ...state,
                  content: state.content || ele.content,
                  style: {
                    ...ele.style,
                    ...state.style,
                  }
                }
              }
              return ele;
            })
          }
        }
        return slide;
      })
    }
    setCurrentPre(newCurrentPre);
    onClose();
  }

  const DrawerList = <div style={{ width: 360, padding: 16 }}>
    <FormRow>
        <LabelTitle style={{ width: 60 }}>X</LabelTitle>
        <Input
            style={{ flex: 1 }}
            placeholder='please enter x'
            value={state.style?.x}
            onChange={(e) => {
              setState({ ...state, style: { ...state.style, x: e.target.value } });
            }}
        />
    </FormRow>
    <FormRow>
        <LabelTitle style={{ width: 60 }}>Y</LabelTitle>
        <Input style={{ flex: 1 }} placeholder='please enter y' value={state.style?.y} onChange={(e) => {
          setState({ ...state, style: { ...state.style, y: e.target.value } });
        }} />
    </FormRow>
    <FormRow>
        <LabelTitle style={{ width: 60 }}>Width</LabelTitle>
        <Input style={{ flex: 1 }} placeholder='please enter width' value={state.style?.width} onChange={(e) => {
          setState({ ...state, style: { ...state.style, width: e.target.value } });
        }} />
    </FormRow>
    <FormRow>
        <LabelTitle style={{ width: 60 }}>Height</LabelTitle>
        <Input style={{ flex: 1 }} placeholder='please enter height' value={state.style?.height} onChange={(e) => {
          setState({ ...state, style: { ...state.style, height: e.target.value } });
        }} />
    </FormRow>
    {
        type === elementTypes.Text && <>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Text Content</LabelTitle>
                <Input style={{ flex: 1 }} placeholder='please enter content' value={state.content} onChange={(e) => {
                  setState({ ...state, content: e.target.value });
                }} />
            </FormRow>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Font Size</LabelTitle>
                <Input style={{ flex: 1 }} placeholder='please enter Font Size' value={state.style?.fontSize} onChange={(e) => {
                  setState({ ...state, style: { ...state.style, fontSize: e.target.value } });
                }} />
            </FormRow>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>color</LabelTitle>
                <CustomColors
                    value={state.style?.color || '#000000'}
                    onChange={(val) => {
                      setState({ ...state, style: { ...state.style, color: val } });
                    }}
                />
            </FormRow>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Text Align</LabelTitle>
                <BasicSelect
                    value={state.style?.textAlign || 'start'}
                    options={['start', 'end', 'center']}
                    onChange={(val) => {
                      setState({ ...state, style: { ...state.style, textAlign: val } });
                    }}
                />
            </FormRow>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Font Family</LabelTitle>
                <BasicSelect
                    value={state?.style?.fontFamily || 'Roboto'}
                    options={['Roboto', 'Helvetica', 'Arial', 'sans-serif']}
                    onChange={(val) => {
                      setState({ ...state, style: { ...state.style, fontFamily: val } });
                    }}
                />
            </FormRow>
        </>
    }
    {
        type === elementTypes.Image && <>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Image Url</LabelTitle>
                <Input style={{ flex: 1 }} placeholder='please enter image url' value={state.content} onChange={(e) => {
                  setState({ ...state, content: e.target.value });
                }} />
            </FormRow>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Image Alt</LabelTitle>
                <Input style={{ flex: 1 }} placeholder='please enter image alt' value={state.alt} onChange={(e) => {
                  setState({ ...state, alt: e.target.value });
                }} />
            </FormRow>
        </>
    }
    {
        type === elementTypes.Video && <>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Video Url</LabelTitle>
                <Input style={{ flex: 1 }} placeholder='please enter video url' value={state.content} onChange={(e) => {
                  setState({ ...state, content: e.target.value });
                }} />
            </FormRow>
            <FormRow>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Autoplay</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={state.autoPlay}
                  onChange={(e) => {
                    setState({ ...state, autoPlay: e.target.value });
                  }}
                >
                  <FormControlLabel value="true" control={<Radio />} label="True" />
                  <FormControlLabel value="false" control={<Radio />} label="False" />
                </RadioGroup>
              </FormControl>
            </FormRow>
        </>
    }
    {
        type === elementTypes.Code && <>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Code</LabelTitle>
                <Textarea minRows={2} style={{ flex: 1 }} placeholder='please enter code' value={state.content} onChange={(e) => {
                  setState({ ...state, content: e.target.value });
                }} />
            </FormRow>
            <FormRow>
                <LabelTitle style={{ width: 60 }}>Font Size</LabelTitle>
                <Input style={{ flex: 1 }} placeholder='please enter Font Size' value={state.style?.fontSize} onChange={(e) => {
                  setState({ ...state, style: { ...state.style, fontSize: e.target.value } });
                }} />
            </FormRow>
        </>
    }
    <FormRow>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </FormRow>
  </div>;
  return (
    <Drawer
      open={visible}
      onClose={onClose}
      anchor="right"
      title="Custom"
    >
      {DrawerList}
    </Drawer>
  );
};
