import React from 'react';
import { bool, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Container, Row, Col, Alert, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';
import WaveBG from '../WaveBG';
import styles from './Loading.module.scss';

const Loading = ({ isLoading, pastDelay, error }) => {
    const renderLoading = isLoading && pastDelay;
    return (
        <>
            <WaveBG />
            {(renderLoading || error) && (
                <Container
                    className={classNames(
                        'py-5',
                        'text-center',
                        'text-primary'
                    )}
                >
                    <Row className="py-5">
                        <Col md={{ span: 6, offset: 3 }} className="py-md-5">
                            {renderLoading && (
                                <FontAwesomeIcon
                                    icon={faSpinnerThird}
                                    size="5x"
                                    spin
                                    className="my-5"
                                />
                            )}
                            {error && (
                                <Alert
                                    variant="danger"
                                    className={classNames('m-0', 'text-left')}
                                >
                                    <Media>
                                        <FontAwesomeIcon
                                            icon={faExclamationTriangle}
                                            fixedWidth
                                            className="mr-3"
                                        />
                                        <Media.Body
                                            className={styles.alertContent}
                                        >
                                            {process.env.NODE_ENV ===
                                            'development' ? (
                                                <>
                                                    <b>Page Load Error</b>
                                                    <pre className="m-0">
                                                        {error.message}
                                                        <br />
                                                        {error.stack}
                                                    </pre>
                                                </>
                                            ) : (
                                                <>
                                                    Sorry, there was a problem
                                                    loading this page. Please{' '}
                                                    <button
                                                        type="button"
                                                        className={classNames(
                                                            styles.refreshBtn,
                                                            'alert-link',
                                                            'p-0',
                                                            'bg-transparent',
                                                            'border-0'
                                                        )}
                                                        onClick={() =>
                                                            window.location.reload()
                                                        }
                                                    >
                                                        refresh
                                                    </button>
                                                    .
                                                </>
                                            )}
                                        </Media.Body>
                                    </Media>
                                </Alert>
                            )}
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

Loading.propTypes = {
    isLoading: bool.isRequired,
    pastDelay: bool,
    error: shape({
        message: string
    })
};

Loading.defaultProps = {
    pastDelay: false,
    error: undefined
};

export default Loading;
