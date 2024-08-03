import styles from './Card.module.scss';

export const Card = ({
  variant,
  children,
  direction = 'vertical',
  additionalClassname,
}) => {
  const createButtonVariantClassname = () => {
    switch (variant) {
      case 'blue':
        return styles.blue;

      case 'grey':
        return styles.grey;

      case 'outline':
        return styles.outline;

      case 'shadow':
        return styles.shadow;

      default:
        return '';
    }
  };

  const cardClassname = `${styles.card} ${direction} ${createButtonVariantClassname()} ${additionalClassname}`;
  return <div className={cardClassname}>{children}</div>;
};
