import React from "react";
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import modalstyles from "./modal.module.css"
const Modal = ({ setIsOpen, setModalType }) => {
  const handleClose = () => {
    setIsOpen(false);
    setModalType(null);  // Reset the modal type when closing the modal
  };
  return (
    <>
      <div className={modalstyles.darkBG} onClick={handleClose} />
      <div className={modalstyles.centered}>
        <div className={modalstyles.modal}>
          <div className={modalstyles.modalHeader}>
            <h4 className={modalstyles.heading}>Thanks for being a member of our NFT community!</h4>
          </div>
          <button className={styles.closeBtn} onClick={handleClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={modalstyles.modalContent}>
            Please, reload an application to use Premium features
          </div>
          <div className={modalstyles.modalActions}>
            <div className={modalstyles.actionsContainer}>
              <button className={modalstyles.deleteBtn} onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;