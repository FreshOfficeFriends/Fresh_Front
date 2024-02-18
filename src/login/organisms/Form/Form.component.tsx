import React from 'react';
import { Button, FormControl } from '@mui/material';
import { TextFieldCustom } from '@shared';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';

type FormParams = {
  form: MobxReactForm;
};

export const Form = observer(({ form }: FormParams) => {
  return (
    <FormControl fullWidth={true} onSubmit={form.onSubmit}>
      <TextFieldCustom field={form.$('email')} />
      <TextFieldCustom field={form.$('password')} />
      <Button type={'submit'} onClick={form.onSubmit}>
        submit
      </Button>
    </FormControl>
  );
});
