import React, { useEffect } from 'react';
import { Thumbnail as Wrapper } from './ui';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';

export const Thumbnail = ({ currentPre, setCurrentPre }) => {
  const [open, setOpen] = React.useState(false);
  const [thumbnail, setThumbnail] = React.useState(currentPre.thumbnail);

  const handleOk = (e) => {
    e.stopPropagation()
    setCurrentPre({ ...currentPre, thumbnail });
    setOpen(false);
  }

  const handleClickOpen = (e) => {
    e.stopPropagation()
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation()
    setOpen(false);
  };

  useEffect(() => {
    setThumbnail(currentPre.thumbnail)
  }, [currentPre.thumbnail])

  return <Wrapper onClick={handleClickOpen}>
    {
      currentPre.thumbnail
        ? <img src={currentPre.thumbnail} alt='thumbnail img' />
        : <div className='empty'></div>
    }
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ minWidth: 320 }}
      >
        <DialogTitle id="alert-dialog-title" style={{ minWidth: 320 }}>
            Thumbnail
        </DialogTitle>
        <DialogContent>
          <DialogContentText>thumbnail url</DialogContentText>
          <Input style={{ minWidth: 320 }} value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  </Wrapper>
}
