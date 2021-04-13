import React from 'react';
import PropTypes from 'prop-types';
import { Modal as ModalAntd} from 'antd';
import 'antd/dist/antd.css';
import { Span } from 'components/atoms/Span/Span';

const Modal = ({ title, txt, visible, handleOk, handleCancel }) => {
    return (
        <ModalAntd
            title={title}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Span>{txt}</Span>
        </ModalAntd>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};

export default Modal;
