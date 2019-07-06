import React from 'react';
import propTypes from 'prop-types';
import styles from '../reader.module.css';

const Controls = ({
    nextIndex,
    prevIndex,
    nextButtonIsActive,
    prevButtonIsActive,
}) => (
    <section className={styles.controls}>
        <button
            onClick={prevIndex}
            type="button"
            disabled={prevButtonIsActive}
            className={styles.button}
        >
            Назад
        </button>
        <button
            onClick={nextIndex}
            type="button"
            disabled={nextButtonIsActive}
            className={styles.button}
        >
            Вперед
        </button>
    </section>
);

Controls.propTypes = {
    nextIndex: propTypes.func,
    prevIndex: propTypes.func,
    nextButtonIsActive: propTypes.bool.isRequired,
    prevButtonIsActive: propTypes.bool.isRequired,
};

Controls.defaultProps = {
    nextIndex: () => {},
    prevIndex: () => {},
};

export default Controls;
