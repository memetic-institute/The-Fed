import React from 'react';
import { number, arrayOf, shape } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { faShoppingCart } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import Card from '../Card';

const headerClassNames = classNames('m-2', 'd-flex', 'align-items-center');

const Store = ({ money, store }) => (
    <Card>
        <h2 className={headerClassNames}>
            <FontAwesomeIcon
                icon={faShoppingCart}
                fixedWidth
                className="mr-2"
            />
            STORE
        </h2>
        {store.map(product => (
            <ListGroup key={product.name} variant="flush">
                <Item disabled={product.price > money} {...product} />
            </ListGroup>
        ))}
    </Card>
);

Store.propTypes = {
    money: number.isRequired,
    store: arrayOf(shape({})).isRequired
};

const mapStateToProps = ({ game: { money, store } }) => ({
    money,
    store
});

export default connect(mapStateToProps)(Store);
