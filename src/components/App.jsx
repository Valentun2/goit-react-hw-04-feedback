import { useState } from 'react';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './notification/Notification';
export const App = () => {
  const [evaluations, setEvaluations] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const hadleClick = evt => {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }
    setEvaluations(prevState => {
      return {
        ...evaluations,
        [evt.target.name]: prevState[evt.target.name] + 1,
      };
    });
  };

  const { good, neutral, bad } = evaluations;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100 || 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(evaluations)}
          onLeaveFeedback={hadleClick}
        />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
