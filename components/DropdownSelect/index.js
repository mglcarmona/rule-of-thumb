import { useSelect } from 'downshift';
import styles from './DropdownSelect.module.scss';

export default function DropdownSelect(props) {
  const { items, selectedItem, handleSelected } = props;

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    id: 'list-selector',
    items,
    selectedItem,
    onSelectedItemChange: handleSelected,
  });

  return (
    <div className={styles.container}>
      <button
        type="button"
        {...getToggleButtonProps()}
        className={styles.button}
        aria-label="Choose an element"
      >
        {selectedItem}
      </button>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              key={index}
              {...getItemProps({ item, index })}
              className={`${styles.option} ${
                highlightedIndex === index ? styles.selected : ''
              }`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
