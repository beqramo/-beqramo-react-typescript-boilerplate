import { DynamicFieldsEnum } from 'utils/enums';

export const registrationUserForms: FormSectionWrapperType[] = [
  {
    id: 134,
    title: 'Your names',
    fields: [
      {
        id: 2432,
        type: DynamicFieldsEnum.Input,
        value: '',
        name: 'first_name',
        placeholder: 'First name',
        customType: 'twoInputInRow',
      },
      {
        id: 243,
        type: DynamicFieldsEnum.Input,
        value: '',
        name: 'last_name',
        placeholder: 'Last name',
        customType: 'twoInputInRow',
      },
    ],
  },
  {
    id: 34,
    title: 'email',
    fields: [
      {
        id: 2432,
        type: DynamicFieldsEnum.Input,
        value: '',
        name: 'email',
        placeholder: 'e.g. jsmith@yourcompany.com',
      },
    ],
  },
  {
    id: 1324,
    title: 'Phone',
    fields: [
      {
        id: 243,
        type: DynamicFieldsEnum.Input,
        value: '',
        name: 'phone',
        placeholder: '87 2314 123',
        customType: 'twoField2/5',
      },
    ],
  },
  {
    id: 132324,
    title: 'Password (twice)',
    fields: [
      {
        id: 2432,
        type: DynamicFieldsEnum.Password,
        value: '',
        name: 'password',
        customType: 'twoInputInRow',
      },
      {
        id: 243,
        type: DynamicFieldsEnum.Password,
        value: '',
        name: 'password_confirmation',
        customType: 'twoInputInRow',
      },
    ],
  },
];
