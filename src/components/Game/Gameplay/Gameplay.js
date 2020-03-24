import React, { useState, useEffect } from 'react';
import { number, bool, func } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { incrementTimer } from '../../../state/modules/game';
import { renderModal } from '../../../state/modules/modal';
import Help from '../Help';
import Store from './Store';
import News from './News';
import MoneyPrinting from './MoneyPrinting';
import styles from './Gameplay.module.scss';

const h100 = 'h-100';

const Gameplay = ({
    money,
    totalMoney,
    showModal,
    tutorial,
    handleTimer,
    handleRenderModal
}) => {
    const [openModalIntro, setOpenModalIntro] = useState(
        tutorial && money === 0 && money === totalMoney
    );
    useEffect(() => {
        if (openModalIntro)
            handleRenderModal({
                render: closeModal => (
                    <Help
                        isGameStart
                        handleCloseModal={() => {
                            setOpenModalIntro(false);
                            closeModal();
                        }}
                    />
                ),
                size: 'lg'
            });
        if (!showModal) {
            const gameIncrement = setInterval(handleTimer, 1000);
            return () => clearInterval(gameIncrement);
        }
        return () => null;
    }, [openModalIntro, showModal, handleRenderModal, handleTimer]);
    return (
        <div
            className={classNames(
                styles.root,
                h100,
                'pt-3',
                'pb-5',
                'text-white'
            )}
        >
            <Container fluid className={h100}>
                <Row className={h100}>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1 }}>
                        <Store />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
                        <MoneyPrinting />
                    </Col>
                    <Col xs={{ span: 12, order: 3 }} md={{ span: 4, order: 3 }}>
                        <News />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Gameplay.propTypes = {
    money: number.isRequired,
    totalMoney: number.isRequired,
    showModal: bool.isRequired,
    tutorial: bool.isRequired,
    handleTimer: func.isRequired,
    handleRenderModal: func.isRequired
};

const mapStateToProps = ({
    game: { money, totalMoney },
    modal: { show },
    preferences: { tutorial }
}) => ({
    showModal: show,
    money,
    totalMoney,
    tutorial
});

const mapDispatchToProps = {
    handleTimer: incrementTimer,
    handleRenderModal: renderModal
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gameplay);
