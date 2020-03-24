import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    faArrowLeft
} from '@fortawesome/pro-solid-svg-icons';
import WaveBG from '../WaveBG';
import Footer from '../Footer';
import styles from './NotFound.module.scss';

const NotFound = () => (
    <>
        <Helmet title="Not Found" />
        <WaveBG />
        <Container className={classNames('py-5', 'text-center')}>
            <Card body className={classNames('main-card', 'p-3')}>
                <FontAwesomeIcon
                    icon={faQuestionCircle}
                    size="5x"
                    className="mb-4"
                />
                <h1>
                    <span className="text-danger">404:</span> We Lost The
                    Records
                </h1>
                <p className="mb-4">
                    We couldn&apos;t find the page you were looking for. It
                    probably never existed, and you should not ask any
                    questions.
                </p>
                <Button
                    as={Link}
                    to="/"
                    variant="primary"
                    type={null}
                    className={styles.link}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        fixedWidth
                        className="mr-2"
                    />
                    Back to Game
                </Button>
            </Card>
            <Card as="footer" body className={classNames('main-card', 'mt-4')}>
                <Footer />
            </Card>
        </Container>
    </>
);

export default NotFound;
