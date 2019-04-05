import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCounter} from './store/reducers';
import {counterUp, counterDown} from './store/actions';
import styles from './App.module.scss';

class App extends Component {
    state = {
        text: 'Hello from App!'
    };

    render() {
        const {text} = this.state;
        const {counter, counterUp, counterDown} = this.props;
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
            </>
        );
    }
}

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
