export const transformStringToKebabCase = (str: string): string =>
  str.replace(/[A-ZА-ЯЁ]/g, (c, i) => (i ? '-' : '') + c.toLowerCase());
