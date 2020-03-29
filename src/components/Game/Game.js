import React from 'react';
import { bool } from 'prop-types';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TopBar from './TopBar';
import Gameplay from './Gameplay';
import Footer from '../Footer';
import styles from './Game.module.scss';
import YouTubeAudio from '../YouTubeAudio';

const Game = ({ active }) => {
    if (!active) return <Redirect to="/apply" />;
    return (
        <div
            className={classNames(
                styles.root,
                active && styles.active,
                'h-100'
            )}
        >
            <TopBar />
            <div
                role="main"
                className={classNames('h-100', active && 'bg-secondary')}
            >
                <Gameplay />
            </div>
            <Footer />
            {!isMobile && (
                <YouTubeAudio url="https://www.youtube.com/watch?v=mm32b_-sOM0" />
            )}
        </div>
    );
};

Game.propTypes = {
    active: bool.isRequired,
};

const mapStateToProps = ({ game: { active } }) => ({
    active,
});

export default connect(mapStateToProps)(Game);
