import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import slowpoke from 'Images/slowpoke.png';
import {getCounter} from 'Reducers';
import {counterUp, counterDown} from 'Actions';
import styles from './App.module.scss';

const App = ({counter, counterUp, counterDown}) => {
    const [text] = useState('Hello from the App!');

    return (
        <>
            <h1 className={styles.header}>{text}</h1>
            <h3>Redux is awesome</h3>
            <h5>{counter}</h5>
            <div className={styles.row}>
                <button className={`${styles.btnColor} ${styles.btnExtraWidth}`} onClick={counterUp}>
                    Counter UP
                </button>
                <button onClick={counterDown}>Counter DOWN</button>
            </div>
            <img src={slowpoke} alt="hello" />
        </>
    );
};

App.propTypes = {
    counter: PropTypes.number.isRequired,
    counterUp: PropTypes.func.isRequired,
    counterDown: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    counter: getCounter(state)
});

const mapDispatchToProps = {
    counterUp,
    counterDown
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
