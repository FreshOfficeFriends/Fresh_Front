import { TextField } from '@mui/material';
import { observer } from 'mobx-react';
import { Field } from 'mobx-react-form';
import React from 'react';

type TextFieldCustomParams = {
  field: Field;
};

export const TextFieldCustom = observer(({ field }: TextFieldCustomParams) => {
  return (
    <>
      <TextField {...field.bind()} variant="outlined" fullWidth={true} />
      <small style={{ color: 'red' }}>{field.error}</small>
    </>
  );
});
