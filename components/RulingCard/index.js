import styles from './RulingCard.module.scss';

export default function RulingCard() {
  return (
    <div className={styles.card}>
      <img
        className={styles.heroBackground}
        srcSet="/kanye.png 750w, /kanye.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/kanye.png"
        alt="Kanye West"
      />
      <div className={styles.content}>
        <div className={styles.name}>
          <span>Cristina Fernández de Kirchner</span>
        </div>
        <div className={styles.summary}>
          <span>
            Lorem ipsum is placeholder text commonly used in the graphic, print
          </span>
        </div>
        <span className={styles.vote}>Thank you for your vote!</span>
        <div style={{ marginLeft: 'auto' }}>
          <button
            className="icon-button icon-button--small"
            aria-label="thumbs up"
            style={{ marginRight: '1rem' }}
          >
            <img src="/img/thumbs-up.svg" alt="thumbs up" />
          </button>
          <button
            className="icon-button icon-button--small"
            aria-label="thumbs down"
            style={{ marginRight: '1rem' }}
          >
            <img src="/img/thumbs-down.svg" alt="thumbs down" />
          </button>
          <button className={styles.voteButton}>Vote Now</button>
        </div>
      </div>
    </div>
  );
}
