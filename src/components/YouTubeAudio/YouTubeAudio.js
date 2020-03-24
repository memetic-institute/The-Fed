import React from 'react';
import { bool, number, string } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import styles from './YouTubeAudio.module.scss';

const YouTubeAudio = ({ mute, start, className, ...props }) => (
    <YouTubePlayer
        playing
        muted={mute}
        playsinline
        config={{ youtube: { playerVars: { start } } }}
        tabIndex="-1"
        className={classNames(styles.root, className, 'position-absolute')}
        {...props}
    />
);

YouTubeAudio.propTypes = {
    mute: bool.isRequired,
    loop: bool,
    volume: number,
    start: number,
    className: string
};

YouTubeAudio.defaultProps = {
    loop: true,
    volume: 0.7,
    start: 0,
    className: undefined
};

const mapStateToProps = ({ preferences: { mute } }) => ({
    mute
});

export default connect(mapStateToProps)(YouTubeAudio);
