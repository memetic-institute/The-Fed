import React from 'react';
import { string, number } from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';
import commatize from '../../../../../commatizeNumber';
import styles from './Item.module.scss';

const Item = ({ name, count, rate, image, className, ...props }) => (
    <OverlayTrigger
        placement="auto"
        overlay={
            <Tooltip
                id={`printer-tooltip-${name.toLowerCase().replace(/\s/g, '-')}`}
            >
                <b>{name}</b> <i>x{count}</i> earning ${commatize(rate * count)}
                /second
            </Tooltip>
        }
    >
        <div
            className={classNames(
                className,
                styles.img,
                'm-2',
                'mx-auto',
                'rounded-circle'
            )}
            style={{ backgroundImage: `url(${image})` }}
            tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
            {...props}
        >
            <Badge pill variant="primary">
                {count}
            </Badge>
        </div>
    </OverlayTrigger>
);

Item.propTypes = {
    name: string.isRequired,
    count: number.isRequired,
    rate: number.isRequired,
    image: string,
    className: string
};

Item.defaultProps = {
    image: undefined,
    className: undefined
};

export default Item;
