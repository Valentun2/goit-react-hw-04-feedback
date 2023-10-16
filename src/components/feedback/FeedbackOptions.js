import styles from './Feedback.module.css';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <ul onClick={this.props.onLeaveFeedback} className={styles.buttonList}>
          {this.props.options.map((item, i) => {
            return (
              <li key={i}>
                <button className={styles.button} name={item}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
