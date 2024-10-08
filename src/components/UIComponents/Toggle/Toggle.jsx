import styles from './Toggle.module.scss';

export const Toggle = ({ checked, onChange, title }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.toggle}
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
      <span className={styles.toggleBackground}>
        <span className={styles.toggleButton} />
      </span>
      <span className={styles.text}>{title}</span>
    </label>
  );
};
