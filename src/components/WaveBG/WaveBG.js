import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import styles from './WaveBG.module.scss';

const WaveBG = ({ className, ...props }) => (
    <div
        className={classNames(
            className,
            styles.root,
            'w-100',
            'h-100',
            'position-absolute'
        )}
        {...props}
    />
);

WaveBG.propTypes = {
    className: string
};

WaveBG.defaultProps = {
    className: undefined
};

export default WaveBG;
