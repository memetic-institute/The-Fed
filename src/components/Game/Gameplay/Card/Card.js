import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { Card as BSCard } from 'react-bootstrap';
import styles from './Card.module.scss';

const Card = ({ className, ...props }) => (
    <BSCard
        className={classNames(className, styles.root, 'mb-4', 'border-0')}
        {...props}
    />
);

Card.propTypes = {
    className: string
};

Card.defaultProps = {
    className: undefined
};

export default Card;
