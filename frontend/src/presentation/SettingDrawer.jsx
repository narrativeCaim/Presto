import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { StyleTitle, LabelTitle, FormRow } from './ui';
import CustomColors from './CustomColor';
import { Button } from '@mui/material';
import BasicSelect from './Select';

export const SettingDrawer = ({ open, toggleDrawer, currentPre, currentSlides, setCurrentPre, setCurrentSlides }) => {
  const slidesStyle = currentSlides?.style || {};
  const style = currentPre.style || {};

  const [state, setState] = React.useState({
    ...style,
    slibgColor: slidesStyle.bgColor,
    sliblgColor: slidesStyle.blgColor,
  })
  const onClose = toggleDrawer(false);

  useEffect(() => {
    const slidesStyle = currentSlides?.slidesStyle || {};
    const values = { ...style, slibgColor: slidesStyle.slibgColor, sliblgColor: slidesStyle.sliblgColor };
    setState(values);
  }, [style, currentSlides])

  const onConfirm = () => {
    console.log('onConfirm', state);
    const { bgColor, blgColor, slibgColor, sliblgColor } = state;
    const newSlides = { ...currentSlides, style: { ...slidesStyle, slibgColor, sliblgColor } };
    setCurrentSlides(newSlides);
    const newPre = {
      ...currentPre,
      style: { ...style, bgColor, blgColor },
      slides: currentPre.slides?.map((slide) => {
        if (slide.id === newSlides.id) {
          return newSlides;
        }
        return slide;
      })
    };
    setCurrentPre(newPre);
    onClose();
  }

  const DrawerList = (
    <Box sx={{ width: 360 }} padding={2} role="presentation">
      <StyleTitle>Global</StyleTitle>
      <FormRow>
        <LabelTitle>BackgroundColor</LabelTitle>
        <CustomColors
            value={state.bgColor}
            onChange={(val) => {
              setState({ ...state, bgColor: val });
            }}
        />
      </FormRow>
      <LabelTitle>bgGradientColor</LabelTitle>
      <FormRow style={{ marginTop: 8 }}>
        <CustomColors
            value={state.blgColor?.startColor}
            onChange={(val) => {
              setState({ ...state, blgColor: { ...state.blgColor, startColor: val } });
            }}
        />
        <CustomColors
            value={state.blgColor?.endColor}
            onChange={(val) => {
              setState({ ...state, blgColor: { ...state.blgColor, endColor: val } });
            }}
        />
        <BasicSelect
            label='startDir'
            value={state.blgColor?.startDir}
            onChange={(val) => {
              setState({ ...state, blgColor: { ...state.blgColor, startDir: val } });
            }}
            options={['to', 'right', 'bottom', 'left']}
        />
        <BasicSelect
            label='endDir'
            value={state.blgColor?.endDir}
            onChange={(val) => {
              setState({ ...state, blgColor: { ...state.blgColor, endDir: val } });
            }}
            options={['to', 'right', 'bottom', 'left']}
        />
      </FormRow>
      <StyleTitle>Current Slides Style</StyleTitle>
      <FormRow>
        <LabelTitle>BackgroundColor</LabelTitle>
        <CustomColors
            value={state.slibgColor}
            onChange={(val) => {
              setState({ ...state, slibgColor: val });
            }}
        />
      </FormRow>
      <LabelTitle>bgGradientColor</LabelTitle>
      <FormRow style={{ marginTop: 8 }}>
        <CustomColors
            value={state.sliblgColor?.startColor}
            onChange={(val) => {
              setState({ ...state, sliblgColor: { ...state.sliblgColor, startColor: val } });
            }}
        />
        <CustomColors
            value={state.sliblgColor?.endColor}
            onChange={(val) => {
              setState({ ...state, sliblgColor: { ...state.sliblgColor, endColor: val } });
            }}
        />
        <BasicSelect
            label='startDir'
            value={state.sliblgColor?.startDir}
            onChange={(val) => {
              setState({ ...state, sliblgColor: { ...state.sliblgColor, startDir: val } });
            }}
            options={['to', 'right', 'bottom', 'left']}
        />
        <BasicSelect
            label='endDir'
            value={state.blgColor?.endDir}
            onChange={(val) => {
              setState({ ...state, sliblgColor: { ...state.sliblgColor, endDir: val } });
            }}
            options={['to', 'right', 'bottom', 'left']}
        />
      </FormRow>
      <FormRow>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </FormRow>
    </Box>
  );
  return (
    <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        title='Custom'
    >
      {DrawerList}
    </Drawer>
  );
};
