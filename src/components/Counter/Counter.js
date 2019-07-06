import React from 'react';
import propTypes from 'prop-types';
import styles from '../reader.module.css';

const Counter = ({ index, items }) => (
    <p className={styles.counter}>
        {index + 1} / {items.length}
    </p>
);

Counter.propTypes = {
    items: propTypes.arrayOf(propTypes.object),
    index: propTypes.number,
};

Counter.defaultProps = {
    items: [],
    index: 0,
};

export default Counter;
