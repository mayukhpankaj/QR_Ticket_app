import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function InfoDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen} color="secondary">Know More</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" sx={{backgroundColor: "#2E3138", color: "#ccc9e7"}}>Event Title</DialogTitle>
        <DialogContent dividers sx={{backgroundColor: "#2E3138"}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{
                color: "#ccc9e7"
            }}
          >
            Event Details
            <br />
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor: "#2E3138"}}>
          <Button onClick={handleClose} color="secondary">Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
