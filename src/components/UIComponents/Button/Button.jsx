import styles from './Button.module.scss';

export const Button = ({
  variant = 'blue',
  size = 'medium',
  iconLeft,
  iconRight,
  onClick,
  additionalClassname = '',
  children,
  ...rest
}) => {
  const createButtonVariantClassname = () => {
    switch (variant) {
      case 'blue':
        return styles.blue;
      case 'white':
        return styles.white;
      case 'outline':
        return styles.outline;
      case 'outline-dark':
        return styles.outlineDark;
      case 'clear':
      default:
        return '';
    }
  };

  const createButtonSize = () => {
    if (variant === 'clear') {
      return '';
    }
    switch (size) {
      case 'medium':
        return styles.medium;
      case 'small':
        return styles.small;
    }
  };
  const buttonClassname = `${styles.button} ${createButtonSize()} ${createButtonVariantClassname()} ${additionalClassname}`;

  return (
    <button className={buttonClassname} onClick={onClick} {...rest}>
      {iconLeft && <iconLeft />}
      {children}
      {iconRight && <iconRight />}
    </button>
  );
};
