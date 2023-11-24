import { Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Photo from "./Photo";
import { useStore } from "./Store";
import CloseIcon from '@mui/icons-material/Close';
import { transform } from "framer-motion";


export default function ResumeModal({ width }) {

  const { resumeModal, setResumeModal, resumeImage } = useStore()
  // const close = () => {
  //   setPhotoModal(false)
  //   setCurrentPhoto({image: "", aspect: "", width: ""})
  // }

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4.5,
    border: "1px gray solid",
    boxShadow: "20px 20px 15px #1E1E1E",
    overflowY: "scroll",
    width: width,
    height: "90%"
  };

  const overlayStyle ={
    position: "absolute",
    width: "100%",
    height: "100%",
    textAlign: "right"
  }

  const iconStyle = {
    fontSize: "3rem",
    border: "2px white solid",
    boxShadow: "0 0 .2rem #fff,\
                0 0 .2rem #fff,\
                0 0 0.5rem red,\
                0 0 0.2rem red,\
                0 0 0.7rem red,\
               inset 0 0 2rem red;",
    marginRight: "1.5rem",
    position: "sticky",
    top: "1.5rem",
    cursor: "pointer"
  }

  return (
    <Modal
        aria-labelledby="photo-enlarged"
        aria-describedby="photo-enlarged"
        open={resumeModal}
        onClose={() => setResumeModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div style={modalStyle}>
          <div style={overlayStyle}><CloseIcon sx={iconStyle} onClick={()=>setResumeModal(false)}/></div>
          <Photo image={resumeImage.image} aspect={resumeImage.aspect} width="100%"/>
        </div>
      </Modal>

  )
}