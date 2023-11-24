import { Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Photo from "./Photo";
import { useStore } from "./Store";
import CloseIcon from '@mui/icons-material/Close';



export default function ResumeModal() {

  const { resumeModal, setResumeModal, resumeImage, isXL, isLG, isMD, isSM, isXS, } = useStore()


  const size = (() => {
    if (isXL) { return { width: "75%", height: "90vh", iconSize: "2.4rem"} }
    if (isLG) { return { width: "75%", height: "90vh", iconSize: "2.1rem"} }
    if (isMD) { return { width: "90%", height: "90hv", iconSize: "1.8rem"} }
    if (isSM) { return { width: "95%", height: "80vh", iconSize: "1.5rem"} }
    if (isXS) { return { width: "98%", height: "70vh", iconSize: "1.2rem"} }
  })()

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4.5,
    boxShadow: "20px 20px 15px #1E1E1E",
    overflowY: "scroll",
    overflowX: "hidden",
    width: size.width,
    maxHeight: size.height,
  };

  const overlayStyle ={
    position: "absolute",
    width: "100%",
    height: isXL || isLG || isMD ? "120%" : "100%",
    textAlign: "right"
  }

  const iconStyle = {
    fontSize: size.iconSize,
    border: "2px white solid",
    marginRight: "1rem",
    position: "sticky",
    top: "1rem",
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
        aria-labelledby="resume"
        aria-describedby="resume"
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