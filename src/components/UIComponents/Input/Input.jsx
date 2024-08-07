import MaskedInput from 'react-text-mask';
import styles from './Input.module.scss';

export const Input = ({
  additionalClassname,
  id,
  label,
  placeholder,
  maxLength,
  value,
  onChange,
  mask,
  errorMessage,
  showMask,
  type = 'text',
  ...rest
}) => {
  const inputClassname = () => {
    return `${styles.inputWrapper} ${additionalClassname}`;
  };

  return (
    <div className={inputClassname()}>
      <label htmlFor={id} className={additionalClassname}>
        {label}
      </label>

      <MaskedInput
        id={id}
        mask={mask}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        {...rest}
      />

      {{ errorMessage } && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};
