import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from 'react-bootstrap';

const Update = ({ text, ...props }) => (
    <ListGroup.Item
        className={classNames('px-0', 'bg-transparent', 'text-white')}
        {...props}
    >
        {text}
    </ListGroup.Item>
);

Update.propTypes = {
    text: string.isRequired
};

export default Update;
