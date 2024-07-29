import styles from './Link.module.scss';

export const Link = ({
  href,
  variant = 'clear',
  onClick,
  blue,
  additionalClass,
  children,
  ...rest
}) => {
  const createLinkVariant = () => {
    switch (variant) {
      case 'blue':
        return styles.blue;
      case 'clear':
      default:
        return '';
    }
  };

  const linkClassname = `${styles.link} ${createLinkVariant()} ${additionalClass}`;

  return (
    <a className={linkClassname} href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  );
};
