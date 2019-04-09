import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        /**
         * TODO: Add 'something went wrong' component.
         */
        return hasError ? 'Something went wrong...' : children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};
