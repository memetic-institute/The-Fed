import React from 'react';
import { number } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import CountUp from 'react-countup';
import styles from './MoneyTicker.module.scss';

const MoneyTicker = ({ money, printRate }) => (
    <div
        className={classNames(
            styles.root,
            'flex-grow-1',
            'mx-2',
            'position-absolute',
            'text-center',
            'text-white'
        )}
        aria-label={`$${money}`}
        tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
    >
        <CountUp
            start={money}
            end={money + printRate}
            delay={0}
            duration={1}
            decimals={2}
            useEasing={false}
            prefix="$"
            separator=","
        >
            {({ countUpRef }) => <span ref={countUpRef} className="h1" />}
        </CountUp>
    </div>
);

MoneyTicker.propTypes = {
    money: number.isRequired,
    printRate: number.isRequired
};

const mapStateToProps = ({ game: { money, printRate } }) => ({
    money,
    printRate
});

export default connect(mapStateToProps)(MoneyTicker);
