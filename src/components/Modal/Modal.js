import React from 'react';
import { bool, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Modal as BSModal } from 'react-bootstrap';
import { clearModal } from '../../state/modules/modal';

const Modal = ({ show, render, handleClose, _persist, ...props }) => (
    <BSModal show={show} onHide={handleClose} centered {...props}>
        {render(handleClose)}
    </BSModal>
);

Modal.propTypes = {
    show: bool,
    render: func,
    handleClose: func,
    _persist: shape({})
};

Modal.defaultProps = {
    show: false,
    render: () => null,
    handleClose: () => null,
    _persist: undefined
};

const mapStateToProps = ({ modal }) => modal;

const mapDispatchToProps = {
    handleClose: clearModal
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
