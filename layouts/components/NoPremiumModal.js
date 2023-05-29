import React from "react";
import { RiCloseLine } from "react-icons/ri";
import modalstyles from './module.css'
const NoPremiumModal = ({ setIsOpen, setModalType }) => {
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
            <h4 className={modalstyles.heading}>This account doesn't seem to store our NFT's :(</h4>
          </div>
          <button className={modalstyles.closeBtn} onClick={handleClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={modalstyles.modalContent}>
            Please, connect different account or mint our NFT!
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

export default NoPremiumModal