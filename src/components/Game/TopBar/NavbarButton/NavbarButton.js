import React from 'react';
import { oneOfType, object, array, string } from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavbarButton.module.scss';

const NavbarButton = ({ label, icon, className, ...props }) => (
    <OverlayTrigger
        placement="bottom"
        overlay={
            <Tooltip id={`tooltip-${label.toLowerCase().replace(/\s/g, '-')}`}>
                {label}
            </Tooltip>
        }
    >
        <Button
            variant="link"
            className={classNames(styles.root, className)}
            aria-label={label}
            {...props}
        >
            <FontAwesomeIcon icon={icon} fixedWidth size="lg" />
        </Button>
    </OverlayTrigger>
);

NavbarButton.propTypes = {
    label: string.isRequired,
    icon: oneOfType([object, array, string]).isRequired,
    className: string
};

NavbarButton.defaultProps = {
    className: undefined
};

export default NavbarButton;
