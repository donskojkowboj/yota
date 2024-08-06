import MaskedInput from 'react-text-mask';
import styles from './Input.module.scss';

export const Input = ({
  additionalClass,
  id,
  htmlFor,
  label,
  placeholder,
  maxLength,
  value,
  onChange,
  mask,
  type = 'text',
}) => {
  const inputClassname = () => {
    return `${styles.inputWrapper} ${additionalClass}`;
  };

  return (
    <div className={inputClassname()}>
      <label htmlFor={htmlFor} className={additionalClass}>
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
      />
    </div>
  );
};
