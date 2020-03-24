import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import imrdLogo from './imrd.svg';

const Footer = ({ className, ...props }) => (
    <small className={classNames(className, 'text-muted')} {...props}>
        <div className="d-inline-block">
            <div className="d-flex">
                A project by{' '}
                <a
                    href="https://memetic.institute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames('d-flex', 'align-items-center')}
                >
                    <img
                        src={imrdLogo}
                        alt="Institute of Memetic Research and Development"
                        className={styles.imrdLogo}
                    />
                    IMRD
                </a>
            </div>
        </div>
        <span className={classNames(styles.spacer, 'mx-2')}>&middot;</span>
        <div className="d-inline-block">
            <a
                href="https://memetic.institute/gib"
                target="_blank"
                rel="noopener noreferrer"
            >
                Donate
            </a>
        </div>
    </small>
);

Footer.propTypes = {
    className: string,
};

Footer.defaultProps = {
    className: undefined,
};

export default Footer;
