export type BaseResponseDTO<T = undefined> = {
  status: boolean;
  data?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paging?: any;
};
