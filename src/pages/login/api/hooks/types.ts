import { RequestMethods } from '@shared';

export type BaseRequestParams = {
  resource: string;
  method: keyof typeof RequestMethods;
};
