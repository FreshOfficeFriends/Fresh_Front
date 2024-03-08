import useAxios, { RefetchFunction } from 'axios-hooks';
import { AxiosError } from 'axios';
import { BaseRequestParams } from './types';

export const useCreateUser = ({
  resource,
  method,
}: BaseRequestParams): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: AxiosError<any, any> | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createUser: RefetchFunction<any, any>;
} => {
  const [{ data, loading, error }, refetch] = useAxios({ url: resource, method });

  return { data, loading, error, createUser: refetch };
};
