import React from 'react';
import { number, shape, bool } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Media, ListGroup } from 'react-bootstrap';
import {
    faNewspaper,
    faQuestionCircle
} from '@fortawesome/pro-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card';
import Update from './Update';
import Tweet from './Tweet';
import { ReactComponent as CIA } from './cia.svg';
import styles from './News.module.scss';

const List = props => (
    <ListGroup variant="flush" className="small" {...props} />
);

const News = ({ time, store, news, mute }) => (
    <Card>
        <h2 className={classNames('m-2', 'd-flex', 'align-items-center')}>
            <FontAwesomeIcon icon={faNewspaper} fixedWidth className="mr-2" />
            NEWS
        </h2>
        <Media className="mx-2">
            <CIA height="32px" className="mr-2" />
            <Media.Body>
                <h3 className="m-0">CIA NEWS WIRE</h3>
                {store.find(({ name }) => name === 'Propaganda Campaign')
                    .reveal ? (
                    <List>
                        {/* TEMP way to render CIA updates */}
                        {[news.cia[news.cia.length - 1]].map(update => (
                            <Update key={update.id} {...update} />
                        ))}
                    </List>
                ) : (
                    <span
                        className={classNames(
                            styles.classifiedLabel,
                            'd-flex',
                            'align-items-center',
                            'h5',
                            'text-danger'
                        )}
                    >
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            fixedWidth
                            className="mr-2"
                        />
                        CLASSIFIED
                    </span>
                )}
            </Media.Body>
        </Media>
        <Media className="m-2">
            <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                fixedWidth
                className={classNames(styles.twitterIcon, 'mr-2')}
            />
            <Media.Body>
                <h3 className="m-0">TRUMP TWEETS</h3>
                <List>
                    {news.trump
                        .map(tweet => (
                            <Tweet
                                key={tweet.id}
                                gameTime={time}
                                mute={mute}
                                {...tweet}
                            />
                        ))
                        .reverse()}
                </List>
            </Media.Body>
        </Media>
    </Card>
);

News.propTypes = {
    time: number.isRequired,
    store: shape({
        cia: shape({}),
        trump: shape({})
    }).isRequired,
    news: shape({}).isRequired,
    mute: bool.isRequired
};

const mapStateToProps = ({
    game: { time, store, news },
    preferences: { mute }
}) => ({
    time,
    store,
    news,
    mute
});

export default connect(mapStateToProps)(News);
