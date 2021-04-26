export default function ThumbButton(props) {
  const { thumbKind, isSelected, onClick } = props;
  return (
    <button
      className={`icon-button icon-button--small ${isSelected && 'selected'}`}
      aria-label={`thumbs ${thumbKind}`}
      onClick={onClick}
    >
      <img src={`/img/thumbs-${thumbKind}.svg`} alt={`thumbs ${thumbKind}`} />
    </button>
  );
}
