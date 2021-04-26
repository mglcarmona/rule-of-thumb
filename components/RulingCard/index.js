import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { VOTE_TYPES } from '../../contants';
import ThumbButton from '../ThumbButton';
import VotesGaugeBar from '../VotesGaugeBar';
import styles from './RulingCard.module.scss';

const MojorityIcon = (props) => {
  const { hasPositiveMojority } = props;
  const thumbKind = hasPositiveMojority ? 'up' : 'down';
  return (
    <div className="icon-badge" aria-label={`thumbs ${thumbKind}`}>
      <img src={`/img/thumbs-${thumbKind}.svg`} alt={`thumbs ${thumbKind}`} />
    </div>
  );
};

export default function RulingCard(props) {
  const { data, isList, selectVote, selectedVote, index, vote, reset } = props;

  const handleVoteAction = data.voted ? () => reset(index) : vote;

  const hasPositiveMojority = data.votes.positive > data.votes.negative;
  const canVote = selectedVote || data.voted;
  const lastUpdate = formatDistanceToNow(new Date(data.lastUpdated));
  return (
    <div
      className={`${styles.card} ${isList && styles.list}`}
      role="ruling-card"
    >
      <MojorityIcon hasPositiveMojority={hasPositiveMojority} />
      <img
        className={styles.heroBackground}
        srcSet={`${data.picture} 750w, ${data.picture} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        src={data.picture}
        alt={data.name}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <div className={styles.name}>
            <p>{data.name}</p>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.voting}>
          <span className={styles.vote}>
            {data.voted
              ? 'Thank you for your vote!'
              : `${lastUpdate} in ${data.category}`}
          </span>
          <div className={styles.buttonsRow}>
            {!data.voted && (
              <>
                <ThumbButton
                  thumbKind="up"
                  isSelected={selectedVote === VOTE_TYPES.POSITIVE}
                  onClick={() => selectVote(VOTE_TYPES.POSITIVE, index)}
                />
                <ThumbButton
                  thumbKind="down"
                  isSelected={selectedVote === VOTE_TYPES.NEGATIVE}
                  onClick={() => selectVote(VOTE_TYPES.NEGATIVE, index)}
                />
              </>
            )}
            <button
              className={styles.voteButton}
              onClick={handleVoteAction}
              disabled={!canVote}
            >
              {data.voted ? 'Vote Again' : 'Vote Now'}
            </button>
          </div>
        </div>
      </div>
      <VotesGaugeBar
        positive={data.votes.positive}
        negative={data.votes.negative}
      />
    </div>
  );
}
