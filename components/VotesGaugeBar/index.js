import styles from './VotesGaugeBar.module.scss';

export default function VotesGaugeBar(props) {
  const { positive, negative } = props;

  const positivePertcentage = (
    (positive / (positive + negative)) *
    100
  ).toFixed(1);
  const negativePertcentage = (100 - positivePertcentage).toFixed(1);

  return (
    <div className={styles.bar}>
      <div
        className={styles.positive}
        style={{ width: `${positivePertcentage}%` }}
      >
        <img src="/img/thumbs-up.svg" alt="thumbs up" />
        <span>{positivePertcentage}%</span>
      </div>
      <div className={styles.negative}>
        <span>{negativePertcentage}%</span>
        <img src="/img/thumbs-down.svg" alt="thumbs down" />
      </div>
    </div>
  );
}
