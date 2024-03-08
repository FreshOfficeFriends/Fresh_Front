/* eslint-disable no-console */
import React from 'react';
import { Button, FormControl } from '@mui/material';
import { TextFieldCustom } from '@shared';
import { checkUniqueData } from '../../../../api';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';

type FormParams = {
  form: MobxReactForm;
};

export const Form = observer(({ form }: FormParams) => {
  const onSubmit = () => {
    form.onSubmit();
  };

  const handleCheckUniqueUser = async () => {
    if (form.values().email) {
      const data = await checkUniqueData(form);

      console.log(data);
    }
  };

  return (
    <FormControl fullWidth={true}>
      <TextFieldCustom field={form.$('email')} onBlur={() => handleCheckUniqueUser()} />
      {/* <TextFieldCustom field={form.$('firstName')} />
      <TextFieldCustom field={form.$('secondName')} />
      <TextFieldCustom field={form.$('birthday')} /> */}
      <Button type={'submit'} onClick={onSubmit}>
        submit
      </Button>
    </FormControl>
  );
});
