import styles from './Button.module.scss';

export const Button = ({ label, backgroundColor, color }) => {
  return (
    <button style={{ backgroundColor, color }} className={styles.button}>
      {label}
    </button>
  );
};
