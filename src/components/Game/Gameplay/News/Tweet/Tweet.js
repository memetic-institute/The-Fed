import React, { useEffect } from 'react';
import { number, string, bool } from 'prop-types';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { Media, ListGroup } from 'react-bootstrap';
import intervalString from '../../../../../intervalString';
import tweetFx from './tweet.mp3';
import styles from './Tweet.module.scss';

const Tweet = ({ gameTime, id, text, time, mute, ...props }) => {
    const fx = new Audio(tweetFx);
    fx.volume = 0.25;
    useEffect(() => {
        if (gameTime === time + 1 && !mute && !isMobile) fx.play();
    }, [fx, gameTime, time, mute]);
    return (
        <ListGroup.Item
            className={classNames('px-0', 'bg-transparent', 'text-white')}
            aria-labelledby={id}
            {...props}
        >
            <Media>
                <div
                    className={classNames(
                        styles.trumpAvatar,
                        'rounded-circle',
                        'mr-2'
                    )}
                />
                <Media.Body>
                    <b>Donald J. Trump</b>{' '}
                    <span className="text-muted">
                        @realDonaldTrump &middot;{' '}
                        {intervalString(gameTime - time)}
                    </span>
                    <br />
                    <span id={id}>{text}</span>
                </Media.Body>
            </Media>
        </ListGroup.Item>
    );
};

Tweet.propTypes = {
    gameTime: number.isRequired,
    id: string.isRequired,
    text: string.isRequired,
    time: string.isRequired,
    mute: bool.isRequired
};

export default Tweet;
