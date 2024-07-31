import { Button } from '../Button/index.js';
import { CarouselControl } from '../CarouselControl';
import { ArrowBottomIcon } from '../Icons/index.js';

import commonStyles from '../../pagesComponents/MainPage/MainPromo/MainPromo.module.scss';
import blueStyles from './Blue.module.scss';
import greyStyles from './Grey.module.scss';
import greyFormStyles from './GreyForm.module.scss';
import greyVerticalStyles from './GreyVertical.module.scss';
import outlineStyles from './Outline.module.scss';
import outlineConstructorStyles from './OutlineConstructor.module.scss';

export const Card = ({
  variant,
  btnVariant,
  imgSrc,
  title,
  descr,
  btnText,
  additionalClassname,
}) => {
  const createCardMarkupAndStyles = () => {
    const blueStylesClasses = `${blueStyles.blue} ${additionalClassname}`;
    const greyStylesClasses = `${commonStyles.card} ${additionalClassname}`;
    const greyVerticalClasses = `${greyVerticalStyles.greyVertical} ${additionalClassname}`;
    const outlineStylesClasses = `${commonStyles.outlineCard} ${additionalClassname}`;

    switch (variant) {
      case 'blue':
        return (
          <div className={blueStylesClasses}>
            <div className={blueStyles.wrapper}>
              <div className={blueStyles.innerWrapper}>
                <div className={blueStyles.textWrapper}>
                  <h2 className={blueStyles.title}>Семейный конструктор</h2>
                  <div className={blueStyles.descr}>
                    Выгода до 15% за объединение номеров в группу
                  </div>
                </div>

                <Button variant="white">Заказать SIM-карту</Button>
              </div>
              <img className={blueStyles.img} src={imgSrc} alt="promo" />
            </div>
            <div className={blueStyles.carouselButtons}>
              <CarouselControl variant="active" />
              <CarouselControl />
              <CarouselControl />
              <CarouselControl />
              <CarouselControl />
            </div>
          </div>
        );

      case 'grey':
        return (
          <div className={greyStylesClasses}>
            <div className={greyStyles.wrapper}>
              <div className={greyStyles.textWrapper}>
                <h2 className={greyStyles.title}>{title}</h2>
                <div className={greyStyles.descr}>{descr}</div>
              </div>
              <Button
                additionalClassname={greyStyles.packageBtn}
                variant={btnVariant}
              >
                {btnText}
              </Button>
            </div>
          </div>
        );
      case 'greyForm':
        return (
          <div className={commonStyles.card}>
            <h2 className={greyFormStyles.title}>
              Оплатить
              <Button
                variant="clear"
                iconRight={<ArrowBottomIcon />}
                additionalClassname={greyFormStyles.clearBlue}
              >
                смартфон / планшет
              </Button>
            </h2>

            <form className={greyFormStyles.form}>
              <div className={greyFormStyles.inputsWrapper}>
                <div className={greyFormStyles.sum}>
                  <label htmlFor="sum">Сумма</label>
                  <input placeholder="500₽" type="number" id="sum" />
                </div>

                <div className={greyFormStyles.tel}>
                  <label htmlFor="phone">Номер телефона</label>
                  <input placeholder="+7" type="tel" id="phone" />
                </div>
              </div>
              <Button additionalClassname={greyFormStyles.btn}>Оплатить</Button>
            </form>
          </div>
        );

      case 'greyVertical':
        return (
          <div className={greyVerticalClasses}>
            <img className={greyVerticalStyles.img} src={imgSrc} alt="img" />
            <div className={greyVerticalStyles.textContent}>
              <h2 className={greyVerticalStyles.title}>{title}</h2>
              <div className={greyVerticalStyles.descr}>{descr}</div>
            </div>
            <Button additionalClassname={greyFormStyles.btn} variant="outline">
              Перейти
            </Button>
          </div>
        );

      case 'outline':
        return (
          <div className={outlineStylesClasses}>
            <h2 className={outlineStyles.title}>{title}</h2>

            <img className={outlineStyles.img} src={imgSrc} alt="img" />

            <Button
              additionalClassname={outlineStyles.btn}
              size="small"
              variant="outline"
            >
              {btnText}
            </Button>
          </div>
        );

      case 'outlineConstructor':
        return (
          <div className={outlineStylesClasses}>
            <h2 className={outlineConstructorStyles.title}>{title}</h2>
            <Button
              variant="clear"
              additionalClassname={outlineConstructorStyles.btn}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.0527" cy="14.2773" r="14" fill="#F6F6F7" />
                <path
                  d="M12.4875 8.72339C12.4875 9.71619 13.2049 10.2773 14.0527 10.2773C14.7701 10.2773 15.4875 9.71619 15.4875 8.72339C15.4875 7.83849 14.7701 7.27734 14.0527 7.27734C13.2049 7.27734 12.4875 7.83849 12.4875 8.72339Z"
                  fill="#BDC0C6"
                />
                <path
                  d="M15.0525 13.2773V19.2773C15.0525 19.8296 14.6048 20.2773 14.0525 20.2773C13.5002 20.2773 13.0525 19.8296 13.0525 19.2773V13.2773C13.0525 12.7251 13.5002 12.2773 14.0525 12.2773C14.6048 12.2773 15.0525 12.7251 15.0525 13.2773Z"
                  fill="#BDC0C6"
                />
              </svg>
            </Button>

            <div>50 гб 3000 МИН</div>
            <div className={outlineConstructorStyles.messengers}>
              <img src="/src/assets/images/messengers.svg" alt="messengers" />
              <img
                src="/src/assets/images/unlimited-symbol.svg"
                alt="unlimited"
              />
            </div>

            <div className={outlineConstructorStyles.calls}>
              <img src="/src/assets/images/yota_icons.svg" alt="calls" />
              <div className={outlineConstructorStyles.freeCalls}>
                Бесплатные звонки на Yota
              </div>
            </div>

            <div className={outlineConstructorStyles.buttons}>
              <Button variant="clear">
                <svg
                  width="32"
                  height="25"
                  viewBox="0 0 32 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Turn on">
                    <rect
                      id="bg"
                      x="1.55273"
                      y="0.277344"
                      width="30"
                      height="20"
                      rx="10"
                      fill="#E3E4E7"
                    />
                    <g id="dot" filter="url(#filter0_d_0_2420)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5527 17.2773C15.4187 17.2773 18.5527 14.1433 18.5527 10.2773C18.5527 6.41135 15.4187 3.27734 11.5527 3.27734C7.68674 3.27734 4.55273 6.41135 4.55273 10.2773C4.55273 14.1433 7.68674 17.2773 11.5527 17.2773Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_0_2420"
                      x="0.552734"
                      y="2.27734"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0858046 0 0 0 0 0.0840678 0 0 0 0 0.0840678 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_2420"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_2420"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Button>
              <div className={outlineConstructorStyles.buttonsText}>
                Оптимальная скорость
              </div>
              <Button variant="clear">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Question">
                    <circle
                      id="BG"
                      cx="10.5527"
                      cy="10.2773"
                      r="10"
                      fill="#F6F6F7"
                    />
                    <path
                      id="question icon"
                      d="M10.3616 6.70387C9.63607 6.70387 9.03313 7.0176 8.55273 7.64505L7.55273 6.5127C7.82724 6.06171 8.2243 5.69897 8.74391 5.42446C9.26352 5.14995 9.83705 5.0127 10.4645 5.0127C11.4253 5.0127 12.1753 5.2627 12.7145 5.7627C13.2733 6.25289 13.5527 6.86564 13.5527 7.60093C13.5527 8.24799 13.4253 8.7725 13.1704 9.17446C12.9155 9.56662 12.5576 9.94897 12.0969 10.3215C12.038 10.3705 11.9596 10.4343 11.8616 10.5127C11.7733 10.5911 11.6998 10.6549 11.641 10.7039C11.5919 10.7431 11.5233 10.8019 11.4351 10.8803C11.3567 10.9588 11.2978 11.0225 11.2586 11.0715C11.2194 11.1107 11.1655 11.1745 11.0969 11.2627C11.038 11.3411 10.9988 11.4098 10.9792 11.4686C10.9596 11.5274 10.9302 11.6058 10.891 11.7039C10.8616 11.8019 10.8518 11.8901 10.8616 11.9686C10.8812 12.047 10.891 12.145 10.891 12.2627L9.34685 12.2774C9.28803 11.9147 9.28313 11.596 9.33215 11.3215C9.39097 11.0372 9.51352 10.7823 9.69979 10.5568C9.89587 10.3215 10.0527 10.1549 10.1704 10.0568C10.2978 9.94897 10.4988 9.79211 10.7733 9.58622C11.4204 9.13524 11.7439 8.59603 11.7439 7.96858C11.7439 7.61564 11.6116 7.31662 11.3469 7.07152C11.0821 6.82642 10.7537 6.70387 10.3616 6.70387ZM9.02332 14.3656C9.02332 14.0813 9.13117 13.8313 9.34685 13.6156C9.57234 13.3901 9.85175 13.2774 10.1851 13.2774C10.489 13.2774 10.7439 13.3901 10.9498 13.6156C11.1655 13.8313 11.2733 14.0813 11.2733 14.3656C11.2733 14.6892 11.1704 14.9686 10.9645 15.2039C10.7586 15.4294 10.4988 15.5421 10.1851 15.5421C9.85175 15.5421 9.57234 15.4294 9.34685 15.2039C9.13117 14.9686 9.02332 14.6892 9.02332 14.3656Z"
                      fill="#BDC0C6"
                    />
                  </g>
                </svg>
              </Button>
            </div>

            <Button
              additionalClassname={outlineStyles.btn}
              size="small"
              variant={btnVariant}
            >
              {btnText}
            </Button>
          </div>
        );
    }
  };

  return createCardMarkupAndStyles();
};
