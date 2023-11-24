import { Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Photo from "./Photo";
import { useStore } from "./Store";
import Paper from "@mui/material/Paper";
import CloseIcon from '@mui/icons-material/Close';

export default function PhotoModal({ image, aspect, width }) {

  const { photoModal, setPhotoModal, setCurrentPhoto } = useStore()
  const close = () => {
    setPhotoModal(false)
    setCurrentPhoto({image: "", aspect: "", width: ""})
  }

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4.5,
    boxShadow: "20px 20px 15px #1E1E1E",
    width: width,
    aspectRatio: aspect,
  };

  const overlayStyle ={
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    textAlign: "right"
  }

  const iconStyle = {
    fontSize: "1rem",
    border: "2px white solid",
    marginTop: "1rem",
    marginRight: "1rem",
    // marginRight: "1rem",
    // position: "sticky",
    // top: "1rem",
    cursor: "pointer",
    boxShadow: "0 0 .2rem #fff,\
                0 0 .2rem #fff,\
                0 0 0.5rem red,\
                0 0 0.2rem red,\
                0 0 0.7rem red,\
               inset 0 0 2rem red;",
  }

  return (
    <Modal
        aria-labelledby="photo-enlarged"
        aria-describedby="photo-enlarged"
        open={photoModal}
        onClose={() => close()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div style={modalStyle}>
          <div style={overlayStyle}><CloseIcon sx={iconStyle} onClick={close}/></div>
          <Photo image={image} aspect={aspect} width="100%"/>
        </div>
      </Modal>

  )
}
