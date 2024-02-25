/* eslint-disable no-console */
import React from 'react';
import { Button, FormControl } from '@mui/material';
import { TextFieldCustom, RequestMethods, transformStringToKebabCase } from '@shared';
import { useCheckUniqueUser } from '../../../../api';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';
import { Resources } from '../../../../enums';
import { useIsAllowCheckUnique } from './hooks';

type FormParams = {
  form: MobxReactForm;
};

export const Form = observer(({ form }: FormParams) => {
  // const { createUser } = useCreateUser({ resource: 'lol', method: RequestMethods.GET });

  const { setIsValueChanged, isAllowCheckUnique } = useIsAllowCheckUnique(form);

  const { checkUniqueUser } = useCheckUniqueUser({
    resource: transformStringToKebabCase(Resources.checkUniqueEmail),
    method: RequestMethods.POST,
  });

  const onSubmit = () => {
    form.onSubmit();
    // createUser();
  };

  const handleCheckUniqueUser = () => {
    if (isAllowCheckUnique && form.values().email) {
      // if (form.values().email) {
      checkUniqueUser({ data: { email: form.values().email } });
    }
  };

  return (
    <FormControl fullWidth={true}>
      <TextFieldCustom
        field={form.$('email')}
        onBlur={() => handleCheckUniqueUser()}
        onChange={() => setIsValueChanged(true)}
      />
      {/* <TextFieldCustom field={form.$('firstName')} />
      <TextFieldCustom field={form.$('secondName')} />
      <TextFieldCustom field={form.$('birthday')} /> */}
      <Button type={'submit'} onClick={onSubmit}>
        submit
      </Button>
    </FormControl>
  );
});
