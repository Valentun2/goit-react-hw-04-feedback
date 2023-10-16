import { Component } from 'react';
import styles from './Section.module.css';

export class Section extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
