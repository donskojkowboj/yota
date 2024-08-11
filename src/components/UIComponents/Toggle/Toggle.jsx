import styles from './Toggle.module.scss';

export const Toggle = ({ checked, id, onChange, children }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.toggle}
        id={id}
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
      <label className={styles.toggleBackground} htmlFor={id}>
        <span className={styles.toggleButton} />
      </label>
      <label className={styles.text} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
