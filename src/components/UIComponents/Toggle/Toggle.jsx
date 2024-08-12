import styles from './Toggle.module.scss';

export const Toggle = ({ checked, onChange, title }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={title}>
        <input
          className={styles.toggle}
          id={title}
          checked={checked}
          onChange={onChange}
          type="checkbox"
        />
        <span className={styles.toggleBackground}>
          <span className={styles.toggleButton} />
        </span>
        <span className={styles.text}>{title}</span>
      </label>
    </div>
  );
};
