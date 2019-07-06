import React, { Fragment } from "react";
import propTypes from "prop-types";
import styles from "../reader.module.css";

const Publication = ({ items, index }) => (
  <Fragment>
    <div className={styles.reader}>
      <article className={styles.publication}>
        <h2>{items[index].title}</h2>
        <p>{items[index].text}</p>
      </article>
    </div>
  </Fragment>
);

Publication.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
  index: propTypes.number
};

Publication.defaultProps = {
  items: [],
  index: 0
};

export default Publication;
