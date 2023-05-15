import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const partalElement = document.getElementById("Overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, partalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{ props.children}</ModalOverlay>, partalElement)}
    </>
  );
};

export default Modal;
