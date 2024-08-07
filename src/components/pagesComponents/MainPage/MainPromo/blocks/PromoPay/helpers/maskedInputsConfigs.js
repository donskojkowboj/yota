import createNumberMask from 'text-mask-addons/dist/createNumberMask.js';

const phoneMaskString =
  '+,7, ,(,/[9]/,/\\d/,/\\d/,), ,/\\d/,/\\d/,/\\d/,-,/\\d/,/\\d/,-,/\\d/,/\\d/';

export const phoneMask = phoneMaskString.split(',').map((item) => {
  if (item.startsWith('/')) {
    const parts = item.match(/\/(.*?)\//);
    return new RegExp(parts[1]);
  }
  return item;
});

export const currencyMask = createNumberMask({
  prefix: '',
  suffix: ' ₽',
  includeThousandsSeparator: true,
  allowDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
});
