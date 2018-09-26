import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel={"Title"}>
        <h3> Modal </h3>
    </Modal>
);

export default OptionModal;