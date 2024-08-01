import styles from './Card.module.scss';

export const Card = ({ variant, children, additionalClassname }) => {
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
    }
  };

  const cardClassname = `${createButtonVariantClassname()} ${additionalClassname}`;
  return <div className={cardClassname}>{children}</div>;
};
