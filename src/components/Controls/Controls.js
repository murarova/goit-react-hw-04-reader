import React from "react";
import propTypes from "prop-types";
import styles from "../reader.module.css";

const Controls = ({ nextIndex, prevIndex, currentPage }) => (
  <section className={styles.controls}>
    <button
      onClick={prevIndex}
      type="button"
      className={currentPage === 1 ? styles.buttonDesable : styles.button}
    >
      Назад
    </button>
    <button
      onClick={nextIndex}
      type="button"
      className={currentPage === 12 ? styles.buttonDesable : styles.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  nextIndex: propTypes.func,
  prevIndex: propTypes.func
};

Controls.defaultProps = {
  nextIndex: () => {},
  prevIndex: () => {}
};

export default Controls;
