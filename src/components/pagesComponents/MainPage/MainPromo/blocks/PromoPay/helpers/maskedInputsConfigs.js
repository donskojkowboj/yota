import createNumberMask from 'text-mask-addons/dist/createNumberMask.js';

// prettier-ignore
export const phoneMask = ['+', '7', ' ', '(', /[9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export const currencyMask = createNumberMask({
  prefix: '',
  suffix: ' ₽',
  includeThousandsSeparator: true,
  allowDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
});
