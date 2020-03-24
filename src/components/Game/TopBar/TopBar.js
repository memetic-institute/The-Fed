import React from 'react';
import { shape, bool, func } from 'prop-types';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import sizeMe from 'react-sizeme';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Navbar } from 'react-bootstrap';
import {
    faVolume,
    faVolumeMute,
    faQuestionCircle,
    faTimesCircle
} from '@fortawesome/pro-solid-svg-icons';
import { endGame } from '../../../state/modules/game';
import { toggleVolume } from '../../../state/modules/preferences';
import { renderModal } from '../../../state/modules/modal';
import Logo from '../../Logo';
import MoneyTicker from './MoneyTicker';
import NavbarButton from './NavbarButton';
import Help from '../Help';
import EndGameWarning from '../EndGameWarning';
import styles from './TopBar.module.scss';

const TopBar = ({
    size: { width: browserWidth },
    mute,
    handleVolume,
    handleEndGame,
    handleRenderModal
}) => {
    const handleHelpModal = () =>
        handleRenderModal({
            render: closeModal => <Help handleCloseModal={closeModal} />,
            size: 'lg'
        });

    const handleEndGameModal = () =>
        handleRenderModal({
            render: closeModal => (
                <EndGameWarning
                    handleCloseModal={closeModal}
                    handleEndGame={handleEndGame}
                />
            )
        });

    return (
        <header>
            <Navbar
                variant="dark"
                bg="primary"
                fixed="top"
                expand="md"
                className={classNames(styles.root)}
            >
                <Navbar.Brand>
                    <Logo
                        height="40px"
                        fill="#FFF"
                        transparent
                        symbol={browserWidth < 768}
                        className="mr-auto"
                    />
                </Navbar.Brand>
                <MoneyTicker />
                <Navbar.Toggle
                    aria-controls="top-bar"
                    className={classNames(styles.toggle, 'border-white')}
                />
                <Navbar.Collapse
                    id="top-bar"
                    className={classNames(
                        'flex-grow-0',
                        'ml-auto',
                        'text-center',
                        'text-md-right'
                    )}
                >
                    {!isMobile && (
                        <NavbarButton
                            label={mute ? 'Enable sound' : 'Mute sound'}
                            icon={mute ? faVolumeMute : faVolume}
                            onClick={handleVolume}
                        />
                    )}
                    <NavbarButton
                        label="Help"
                        icon={faQuestionCircle}
                        className="mx-2"
                        onClick={handleHelpModal}
                    />
                    <NavbarButton
                        label="Resign"
                        icon={faTimesCircle}
                        onClick={handleEndGameModal}
                    />
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

TopBar.propTypes = {
    size: shape({}).isRequired,
    mute: bool.isRequired,
    handleVolume: func.isRequired,
    handleEndGame: func.isRequired,
    handleRenderModal: func.isRequired
};

const mapStateToProps = ({ preferences: { mute } }) => ({
    mute
});

const mapDispatchToProps = {
    handleVolume: toggleVolume,
    handleEndGame: endGame,
    handleRenderModal: renderModal
};

export default compose(
    sizeMe({ monitorWidth: true }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(TopBar);
