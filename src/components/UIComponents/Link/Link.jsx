import styles from './Link.module.scss';

export const Link = ({ href, variant = 'clear', onClick, children }) => {
  const createLinkVariant = () => {
    switch (variant) {
      case 'active':
        return styles.active;
      case 'clear':
      default:
        return '';
    }
  };

  const linkClassname = `${styles.link} ${createLinkVariant()}`;

  return (
    <a className={linkClassname} href={href} onClick={onClick}>
      {children}
    </a>
  );
};
