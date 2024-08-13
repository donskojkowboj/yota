import { TooltipIcon } from '../Icons';
import styles from './Tooltip.module.scss';

export const Tooltip = ({
  icon = <TooltipIcon />,
  children,
  additionalClassname,
}) => {
  const tooltipClassname = `${styles.tooltip} ${additionalClassname}`;

  return (
    <span className={tooltipClassname}>
      {icon}
      <div className={styles.tooltip__text}>{children}</div>
    </span>
  );
};
