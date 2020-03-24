import React from 'react';
import { func } from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const EndGameWarning = ({
    handleCloseModal,
    handleEndGame: _handleEndGame
}) => {
    const handleEndGame = () => {
        _handleEndGame();
        handleCloseModal();
    };
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Resign?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to resign as Fed Chairman and end the
                game?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Resume
                </Button>
                <Button variant="danger" onClick={handleEndGame}>
                    End Game
                </Button>
            </Modal.Footer>
        </>
    );
};

EndGameWarning.propTypes = {
    handleCloseModal: func.isRequired,
    handleEndGame: func.isRequired
};

export default EndGameWarning;
