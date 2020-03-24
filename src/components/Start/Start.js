import React, { useState } from 'react';
import { bool } from 'prop-types';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import WaveBG from '../WaveBG';
import YouTubeAudio from '../YouTubeAudio';
import Logo from '../Logo';
import Intro from './Intro';
import Application from './Application';
import Welcome from './Welcome';
import styles from './Start.module.scss';

const Start = ({ active }) => {
    const [stage, setStage] = useState('intro');

    if (active) return <Redirect to="/" />;

    let Stage;
    switch (stage) {
        case 'intro':
            Stage = () => <Intro handleNext={() => setStage('application')} />;
            break;
        case 'application':
            Stage = () => (
                <Application handleNext={() => setStage('welcome')} />
            );
            break;
        case 'welcome':
            Stage = () => <Welcome />;
            break;
        default:
            Stage = () => null;
    }

    return (
        <>
            <WaveBG />
            {!isMobile && (
                <YouTubeAudio
                    url="https://www.youtube.com/watch?v=cBwGlqrP1-E"
                    start={34347}
                    loop={false}
                />
            )}
            <Container>
                <div className={classNames(styles.logo, 'mx-auto', 'py-5')}>
                    <Logo />
                </div>
                <Card body className={classNames('main-card', 'mb-5')}>
                    <Stage />
                </Card>
            </Container>
        </>
    );
};

Start.propTypes = {
    active: bool.isRequired
};

const mapStateToProps = ({ game: { active } }) => ({
    active
});

export default connect(mapStateToProps)(Start);
