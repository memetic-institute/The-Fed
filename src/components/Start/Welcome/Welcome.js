import React from 'react';
import { shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { startGame } from '../../../state/modules/game';
import { ReactComponent as Signature } from './trump-signature.svg';

const Welcome = ({ name, handleStartGame }) => (
    <>
        <p className="lead">Welcome, Chairman {name.last}!</p>
        <hr />
        <p className="text-left">
            Dear {name.first} Fed,
            <br />
            <br />
            After an extensive and lengthly review of your credentials and
            background, I would like to extend to you a nomination to become the{' '}
            <b>new, big league</b> Chair of the Board of Governors of the
            Federal Reserve System! Normally the Senate is supposed to confirm
            you, but Mitch and I have been having some personal beef lately, so
            we&apos;ll call it good. Contratulations, and good luck!
            <br />
            <br />
            Sincerely,
            <br />
            President Donald J. Trump
            <br />
            <Signature height="90px" />
        </p>
        <Button
            size="lg"
            variant="primary"
            onClick={handleStartGame}
            className="mt-3"
        >
            I accept
        </Button>
    </>
);

Welcome.propTypes = {
    name: shape({
        first: string.isRequired,
        last: string.isRequired
    }),
    handleStartGame: func.isRequired
};

Welcome.defaultProps = {
    name: {
        first: 'Cheater',
        last: 'Cheater'
    }
};

const mapStateToProps = ({
    game: {
        player: { name }
    }
}) => ({ name });

const mapDispatchToProps = {
    handleStartGame: startGame
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome);
