import React from 'react';
import { bool, string, func } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';
import { toggleTutorial } from '../../../state/modules/preferences';

const Help = ({
    isGameStart,
    lastName,
    tutorial,
    handleToggleTutorial,
    handleCloseModal
}) => {
    const handleChange = () => handleToggleTutorial();
    const handleSubmit = event => {
        if (event) event.preventDefault();
        handleCloseModal();
    };
    return (
        <>
            <Modal.Header closeButton onHide={handleCloseModal}>
                <Modal.Title>Help</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>What the hell is this?</h4>
                <p>
                    In <span className="h5">THE FED</span> you play as Chairman{' '}
                    {lastName}, head of the Federal Reserve System of the United
                    States. As with all Fed chairs, it is your job to inflate
                    the U.S. dollar uncontrollably by printing money like
                    nobody&apos;s business.
                </p>
                <h4>How to Play</h4>
                <ol>
                    <li>
                        Click or tap the dollar button (or use your space bar)
                        to print a dollar.
                    </li>
                    <li>
                        Use your money to buy Printers from the Store which can
                        help you print more money faster.
                    </li>
                    <li>
                        Keep the CIA and the Donald happy by printing as fast as
                        possible.
                    </li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Form
                    onSubmit={handleSubmit}
                    className={classNames(
                        'w-100',
                        'd-flex',
                        'align-items-center',
                        'justify-content-between'
                    )}
                >
                    {isGameStart && (
                        <Form.Check
                            custom
                            type="checkbox"
                            checked={!tutorial}
                            id="skipTutorial"
                            label="Don't show this"
                            onChange={handleChange}
                        />
                    )}
                    <Button
                        type="submit"
                        variant="secondary"
                        className="ml-auto"
                    >
                        Close
                    </Button>
                </Form>
            </Modal.Footer>
        </>
    );
};

Help.propTypes = {
    isGameStart: bool,
    lastName: string.isRequired,
    tutorial: bool.isRequired,
    handleToggleTutorial: func.isRequired,
    handleCloseModal: func.isRequired,
};

Help.defaultProps = {
    isGameStart: false,
};

const mapStateToProps = ({
    game: {
        player: {
            name: { last },
        },
    },
    preferences: { tutorial },
}) => ({ lastName: last, tutorial });

const mapDispatchToProps = {
    handleToggleTutorial: toggleTutorial,
};

export default connect(mapStateToProps, mapDispatchToProps)(Help);
