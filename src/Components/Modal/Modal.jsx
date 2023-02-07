import { createPortal } from "react-dom";
import { useStateContext } from "../../Context/StateContext";

const Modal = ({ children, ModalName }) => {
  const { handleModal } = useStateContext();
  return createPortal(
    <div className="relative">
      <div className="overlay" onClick={() => handleModal(ModalName)}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
