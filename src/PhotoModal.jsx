import { Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Photo from "./Photo";
import { useStore } from "./Store";
import Paper from "@mui/material/Paper";

export default function PhotoModal({ image, aspect, width }) {

  const { photoModal, setPhotoModal, setCurrentPhoto } = useStore()
  const close = () => {
    setPhotoModal(false)
    setCurrentPhoto({image: "", aspect: "", width: ""})
  }

  // const borderStyle = {
  //   border: "1px gray solid",
  //   boxShadow: "15px 15px 12px gray"
  // }

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4.5,
    border: "1px gray solid",
    boxShadow: "20px 20px 15px rgba(16, 16, 16, 0.5)"
  };

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
        <Photo image={image} aspect={aspect} width={width} extras={modalStyle}/>
      </Modal>

  )
}