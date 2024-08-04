import styles from './Card.module.scss';

export const Card = ({
  variant = 'blue',
  children,
  direction = 'vertical',
  additionalClassname,
}) => {
  const createCardVariantClassname = () => {
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

  const cardClassname = `${styles.card} ${styles[direction]} ${createCardVariantClassname()} ${additionalClassname}`;
  return <div className={cardClassname}>{children}</div>;
};
