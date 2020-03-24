import React from 'react';
import { number, arrayOf, shape } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import { faPrint } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import commatize from '../../../../commatizeNumber';
import PrintButton from './PrintButton';
import Card from '../Card';
import Item from './Item';

const MoneyPrinting = ({ printRate, powerUps }) => (
    <>
        <PrintButton />
        {powerUps.length ? (
            <Card aria-labelledby="moneyPrintersHeading">
                <Media className={classNames('mt-2', 'mx-2')}>
                    <FontAwesomeIcon
                        icon={faPrint}
                        fixedWidth
                        className={classNames('mt-1', 'mr-2', 'mb-0', 'h2')}
                    />
                    <Media.Body>
                        <h2
                            id="moneyPrintersHeading"
                            className={classNames(
                                'd-flex',
                                'm-0',
                                'align-items-center'
                            )}
                        >
                            MONEY PRINTERS
                        </h2>
                        <div className={classNames('mb-2', 'small')}>
                            ${commatize(printRate)}/sec
                        </div>
                    </Media.Body>
                </Media>
                <div
                    className={classNames(
                        'p-2',
                        'text-right',
                        'd-flex',
                        'align-content-start',
                        'flex-wrap'
                    )}
                >
                    {powerUps.map(powerUp => (
                        <Item key={powerUp.name} {...powerUp} />
                    ))}
                </div>
            </Card>
        ) : null}
    </>
);

MoneyPrinting.propTypes = {
    printRate: number.isRequired,
    powerUps: arrayOf(shape({})).isRequired
};

const mapStateToProps = ({ game: { printRate, store } }) => ({
    printRate,
    powerUps: store.filter(({ count }) => count)
});

export default connect(mapStateToProps)(MoneyPrinting);
