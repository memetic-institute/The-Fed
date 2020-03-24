import React, { useState } from 'react';
import { number, string, bool, func } from 'prop-types';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { printMoney } from '../../../../../state/modules/game';
import BankNote from './BankNote';
import print from './print.mp3';
import styles from './PrintButton.module.scss';

const PrintButton = ({
    printMoneyDenomination,
    mute,
    className,
    handlePrintMoney,
    ...props
}) => {
    const [selectBankNote, setSelectBankNote] = useState(false);
    const handleDown = () => setSelectBankNote(true);
    const handleUp = () => setSelectBankNote(false);
    const handleClick = () => {
        if (!mute && !isMobile) new Audio(print).play();
        handlePrintMoney(printMoneyDenomination);
    };
    const label = `Print ${printMoneyDenomination} dollar${
        printMoneyDenomination > 1 ? 's' : ''
    }`;
    return (
        <Button
            variant={selectBankNote ? 'success' : 'light'}
            block
            className={classNames(
                className,
                'mb-4',
                'p-4',
                'p-lg-5',
                `text-${selectBankNote ? 'white' : 'success'}`,
                'text-center'
            )}
            title={label}
            aria-label={label}
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onTouchStart={handleDown}
            onTouchEnd={handleUp}
            onKeyDown={handleDown}
            onKeyUp={handleUp}
            onClick={handleClick}
            {...props}
        >
            <BankNote
                denomination={1}
                fill={`#${selectBankNote ? 'FFF' : '13ca3e'}`}
                className={classNames(
                    styles.bankNote,
                    selectBankNote && styles.bankNoteShrink,
                    'd-block',
                    'mx-auto'
                )}
            />
            <span className="h1">PRINT</span>
        </Button>
    );
};

PrintButton.propTypes = {
    printMoneyDenomination: number.isRequired,
    mute: bool.isRequired,

    className: string,
    handlePrintMoney: func.isRequired
};

PrintButton.defaultProps = {
    className: undefined
};

const mapStateToProps = ({
    game: { printMoneyDenomination },
    preferences: { mute }
}) => ({
    printMoneyDenomination,
    mute
});

const mapDispatchToProps = {
    handlePrintMoney: printMoney
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrintButton);
