import styles from './HeaderContainer.module.scss';

export const HeaderContainer = (props) => {
  return <div className={styles.headercontainer}>{props.children}</div>;
};
