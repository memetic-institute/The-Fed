import React, { useState } from 'react';
import { string, func, node } from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { setPlayer } from '../../../state/modules/game';

const FormGroup = props => <Form.Group className="text-left" {...props} />;

const FormRow = ({ leftCol: LeftCol, rightCol: RightCol }) => (
    <Row>
        <Col className="pr-2">{LeftCol}</Col>
        <Col className="pl-2">{RightCol}</Col>
    </Row>
);

FormRow.propTypes = {
    leftCol: node.isRequired,
    rightCol: node.isRequired
};

const Application = ({ handleSetPlayer, handleNext }) => {
    const [name, setName] = useState({ first: '', last: '' });
    const handleChange = ({ target: { id, value } }) =>
        setName({ ...name, [id.slice(0, -4)]: value });
    const handleSubmit = event => {
        if (event) event.preventDefault();
        handleSetPlayer({ name });
        handleNext();
    };

    const CrimeFormGroup = ({ label, unit, verb, ...props }) => (
        <FormGroup {...props}>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="number" placeholder="100,000" />
            </InputGroup>
            <Form.Text className="text-muted">
                Please enter the total amount of {unit} you have {verb} in US
                dollars.
            </Form.Text>
        </FormGroup>
    );

    CrimeFormGroup.propTypes = {
        label: string.isRequired,
        unit: string,
        verb: string.isRequired
    };

    CrimeFormGroup.defaultProps = {
        unit: 'money'
    };

    return (
        <>
            <p className="lead">Federal Reserve Chair Application</p>
            <hr />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label htmlFor="firstName">Name</Form.Label>
                    <FormRow
                        leftCol={
                            <Form.Control
                                value={name.first}
                                onChange={handleChange}
                                id="firstName"
                                type="text"
                                size="lg"
                                placeholder="First"
                                aria-label="Player first name"
                                autoFocus
                                required
                            />
                        }
                        rightCol={
                            <Form.Control
                                value={name.last}
                                onChange={handleChange}
                                id="lastName"
                                type="text"
                                size="lg"
                                placeholder="Last"
                                aria-label="Player last name"
                                required
                            />
                        }
                    />
                </FormGroup>
                <FormRow
                    leftCol={
                        <CrimeFormGroup
                            controlId="insiderTrading"
                            label="Insider Trading"
                            verb="insider traded"
                        />
                    }
                    rightCol={
                        <CrimeFormGroup
                            controlId="embezzlement"
                            label="Embezzlement"
                            verb="embezzeled"
                        />
                    }
                />
                <FormRow
                    leftCol={
                        <CrimeFormGroup
                            controlId="bribery"
                            label="Bribery"
                            unit="bribes"
                            verb="given or recieved"
                        />
                    }
                    rightCol={
                        <CrimeFormGroup
                            controlId="taxEvasion"
                            label="Tax Evasion"
                            unit="taxes"
                            verb="evaded"
                        />
                    }
                />
                <Button
                    size="lg"
                    type="submit"
                    variant="primary"
                    className="mt-3"
                >
                    Apply
                </Button>
            </Form>
        </>
    );
};

Application.propTypes = {
    handleSetPlayer: func.isRequired,
    handleNext: func.isRequired
};

const mapDispatchToProps = {
    handleSetPlayer: setPlayer
};

export default connect(
    null,
    mapDispatchToProps
)(Application);
