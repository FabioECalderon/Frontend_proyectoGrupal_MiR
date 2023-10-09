import { ERRORS } from './const';

export function formatNumber(number = 0) {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
  const result = formatter.format(number);
  if (Object.is(result, NaN)) {
    return '0';
  }

  return result;
}

// Function to format error messages
export function formatError(e) {
  if (e.name === 'ZodError') {
    return ERRORS.DECODE;
  } else if (e instanceof Error) {
    return e.message;
  } else if (typeof e === 'string') {
    return e;
  }
}
