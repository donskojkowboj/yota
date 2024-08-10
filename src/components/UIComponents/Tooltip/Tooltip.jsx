import styles from './Tooltip.module.scss';

export const Tooltip = ({ icon, children, additionalClassname }) => {
  let tooltipClassname = `${styles.tooltip} ${additionalClassname}`;

  return (
    <span className={tooltipClassname}>
      {icon}
      {children}
    </span>
  );
};
