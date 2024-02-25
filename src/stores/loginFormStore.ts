/* eslint-disable no-console */
import { autorun } from 'mobx';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';

const plugins = {
  dvr: dvr({ package: validatorjs }),
};

const fields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25',
    type: 'password',
    options: {
      autoTrimValue: true,
    },
  },
];

const hooks = {
  onInit(form: MobxReactForm) {
    autorun(() => form.clearing && console.log('Clearing...'));
    autorun(() => form.resetting && console.log('Resetting...'));
    autorun(() => form.validating && console.log('Validating...'));
    autorun((lol) => form.submitting && console.log(lol));
  },
  onSuccess(form: MobxReactForm) {
    alert('Form is valid! Send the request here.');
    // get field values
    console.log('Form Values!', form.values());
  },
  onError(form: MobxReactForm) {
    alert('Form has errors!');
    // get all form errors
    console.log('All form errors', form.errors());
  },
};

export const form = new MobxReactForm(
  { fields },
  {
    plugins,
    hooks,
  }
);
