import styles from './Button.module.scss';

export const Button = ({
  variant = 'blue',
  size = 'large',
  iconLeft,
  iconRight,
  onClick,
  additionalClassname = '',
  children,
}) => {
  const createButtonVariantClassname = () => {
    switch (variant) {
      case 'blue':
        return styles.blue;
      case 'white':
        return styles.white;
      case 'outline':
        return styles.outline;
      case 'outlineDark':
        return styles.outlineDark;
      case 'clear':
      default:
        return '';
    }
  };

  const createButtonSize = () => {
    switch (size) {
      case 'large':
        return styles.large;
      case 'medium':
        return styles.medium;
      case 'small':
        return styles.small;
    }
  };
  const buttonClassname = `${styles.button} ${createButtonSize()} ${createButtonVariantClassname()} ${additionalClassname}`;

  return (
    <button className={buttonClassname} onClick={onClick}>
      {iconLeft && <iconLeft />}
      {children}
      {iconRight && <iconRight />}
    </button>
  );
};
