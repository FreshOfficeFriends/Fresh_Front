import useAxios, { RefetchFunction } from 'axios-hooks';
import { BaseRequestParams } from './types';
import { AxiosError } from 'axios';
import { BaseResponseDTO, CheckUniqueUserRq } from '@shared';

export const useCheckUniqueUser = ({
  resource,
  method,
}: BaseRequestParams): {
  //TODO when we add dto, add type for data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  loading: boolean;
  //TODO when we add dto, add type for error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: AxiosError<any, any> | null;
  checkUniqueUser: RefetchFunction<CheckUniqueUserRq, BaseResponseDTO>;
} => {
  const [{ data, loading, error }, refetch] = useAxios({ url: `sso/auth/${resource}`, method });

  return { data, loading, error, checkUniqueUser: refetch };
};
