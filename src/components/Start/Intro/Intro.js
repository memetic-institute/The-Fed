import React from 'react';
import { func } from 'prop-types';
import { Button } from 'react-bootstrap';

const Intro = ({ handleNext }) => (
    <>
        <p className="lead">{process.env.REACT_APP_DESCRIPTION}</p>
        <hr />
        <p>
            Thank you for your interest in the position of{' '}
            <i>Chair of the Board of Governors of the Federal Reserve System</i>
            . As the preeminent central bank and backbone of the world&apos;s
            economy, we employ a rigorous hiring and screening process for all
            of our staff. Please tap or click below to begin.
        </p>
        <Button size="lg" variant="primary" onClick={handleNext}>
            Start Your Application
        </Button>
    </>
);

Intro.propTypes = {
    handleNext: func.isRequired
};

export default Intro;
