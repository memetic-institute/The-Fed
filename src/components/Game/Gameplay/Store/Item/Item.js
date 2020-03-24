import React from 'react';
import { string, number, bool, func } from 'prop-types';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { OverlayTrigger, Tooltip, ListGroup, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons';
import { purchaseProduct } from '../../../../../state/modules/game';
import commatize from '../../../../../commatizeNumber';
import till from './till.mp3';
import styles from './Item.module.scss';

const Item = ({
    mute,
    name,
    price,
    rate,
    image,
    reveal,
    handlePurchase,
    className,
    ...props
}) => {
    const handleClick = () => {
        if (reveal) {
            if (!mute && !isMobile) new Audio(till).play();
            handlePurchase(name);
        }
    };
    return (
        <OverlayTrigger
            placement="auto"
            overlay={
                <Tooltip
                    id={`store-tooltip-${name
                        .toLowerCase()
                        .replace(/\s/g, '-')}`}
                >
                    Earns ${commatize(rate)}/second
                </Tooltip>
            }
        >
            <ListGroup.Item
                action
                disabled={!reveal}
                aria-label={reveal ? name : 'Locked item'}
                className={classNames(
                    className,
                    !reveal && ['bg-primary', 'text-danger'],
                    'd-flex',
                    'align-items-center',
                    'justify-content-between'
                )}
                onClick={handleClick}
                {...props}
            >
                <Media className="align-items-center">
                    {image && reveal ? (
                        <div
                            className={classNames(
                                styles.img,
                                'mr-2',
                                'rounded-circle'
                            )}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            size="lg"
                            fixedWidth
                            className="mr-2"
                        />
                    )}
                    <Media.Body>
                        {reveal ? (
                            <b>{name}</b>
                        ) : (
                            <span className="h5">CLASSIFIED</span>
                        )}
                    </Media.Body>
                </Media>
                {reveal && (
                    <span
                        className={classNames('h4', 'm-0')}
                        aria-label="price"
                    >
                        {price ? `$${commatize(price)}` : 'FREE'}
                    </span>
                )}
            </ListGroup.Item>
        </OverlayTrigger>
    );
};

Item.propTypes = {
    mute: bool.isRequired,
    name: string.isRequired,
    price: number,
    rate: number.isRequired,
    image: string,
    reveal: bool.isRequired,
    handlePurchase: func.isRequired,
    className: string
};

Item.defaultProps = {
    price: 0,
    image: undefined,
    className: undefined
};

const mapStateToProps = ({ preferences: { mute } }) => ({ mute });

const mapDispatchToProps = {
    handlePurchase: purchaseProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
