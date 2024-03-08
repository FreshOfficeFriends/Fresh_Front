import { transformStringToKebabCase } from '@shared';
import axios from 'axios';
import { Resources } from '../../enums';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const checkUniqueData = async (form: any) => {
//   const response = await axios
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     .post<CheckUniqueUserRq, any>(`sso/auth/${transformStringToKebabCase(Resources.checkUniqueEmail)}`, {
//       data: { email: form.values().email },
//     });

//   return response;
//   //   .then((response) => {
//   //     // eslint-disable-next-line no-console
//   //     console.log(response, '_RSRSRS');
//   //     // const data = JSON.parse(response.data);
//   //     return Promise.resolve(response.data);
//   //   })
//   //   .catch((error) => {
//   //     // eslint-disable-next-line no-console
//   //     console.error(error);
//   //   })
//   //   );
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function checkUniqueData(form: any) {
  const response = await axios.post(`sso/auth/${transformStringToKebabCase(Resources.checkUniqueEmail)}`, {
    data: { email: form.values().email },
  });
  return response.data;
}
