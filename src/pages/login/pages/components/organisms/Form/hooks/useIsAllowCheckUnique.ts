import { useEffect, useState } from 'react';
import MobxReactForm from 'mobx-react-form';

export const useIsAllowCheckUnique = (form: MobxReactForm) => {
  const [isValueChanged, setIsValueChanged] = useState(true);
  const [isAllowCheckUnique, setIsAllowCheckUnique] = useState(false);
  //   const [isValid, setIsValid] = useState(false);

  form.validate('email').then(({ isValid }) => {
    // eslint-disable-next-line no-console
    console.log(isValid);
  });

  useEffect(() => {
    form.values().email && isValueChanged && setIsAllowCheckUnique(true);
  }, [form, isValueChanged]);

  return { setIsValueChanged, isAllowCheckUnique };
};
