import { Component } from 'react';
import styles from './Statistics.module.css';
export class Statistics extends Component {
  render() {
    return (
      <>
        <h3 >{this.props.title}</h3>
        
          <ul>
            <li className={styles.item}>
              <p>Good:{this.props.good}</p>
            </li>
            <li className={styles.item}>
              <p>Neutral:{this.props.neutral}</p>
            </li>
            <li className={styles.item}>
              <p>Bad:{this.props.bad}</p>
            </li>
            <li className={styles.item}>
              <p>Total:{this.props.total}</p>
            </li>
            <li className={styles.item}>
              <p>
                Positive feedback:{Math.round(this.props.positivePercentage)}%
              </p>
            </li>
          </ul>
        
      </>
    );
  }
}
