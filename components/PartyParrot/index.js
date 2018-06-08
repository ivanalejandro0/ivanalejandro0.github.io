import React from "react";
import ReactDOM from "react-dom";

import styles from "./index.scss";

export default class PartyParrot extends React.PureComponent {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.ball}>
        </div>
      </div>
    );
  }
}
