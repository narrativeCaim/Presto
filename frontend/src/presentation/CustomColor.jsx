import React, { useState, useMemo } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

const CustomColors = props => {
  const { value: color = '#1976d2', onChange: setColor } = props;
  const styles = useMemo(() => {
    return reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          top: 0,
          right: 0,
          paddingBottom: 60,
        },
      },
    });
  }, [color]);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = color => {
    setColor(
      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    );
    handleClose();
  };
  return (
    <div id="CustomColors">
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {
        displayColorPicker
          ? <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClose} />
            <SketchPicker color={color} onChange={handleChange} />
          </div>
          : null
      }
    </div>
  );
};
export default CustomColors;
