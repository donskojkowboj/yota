import styles from './CarouselControl.module.scss';

export const CarouselControl = ({ variant = 'clear', onClick }) => {
  const createCarouselControlVariant = () => {
    switch (variant) {
      case 'active':
        return styles.active;
      case 'clear':
        return '';
    }
  };
  const carouselControlClassname = `${styles.control} ${createCarouselControlVariant()}`;
  return <div onClick={onClick} className={carouselControlClassname}></div>;
};
