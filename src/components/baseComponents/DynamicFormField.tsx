import React, { useMemo, useRef } from 'react';
import { Controller, DeepMap, FieldError } from 'react-hook-form';
import { DynamicFieldsEnum } from 'utils/enums';

import BaseInput from './BaseInput';
import BaseRadioGroup from './BaseRadioGroup';
import BaseSelect from './BaseSelect';
import BaseCheckbox from './BaseCheckbox';
import BaseTextArea from './BaseTextArea';
import BaseCopyable from './BaseCopyable';
import BaseTimePicker from './BaseTimePicker';
import BaseDatePicker from './BaseDatePicker';
import { FormPageTypeEnum } from 'utils/enums';
import { Input } from 'antd';

type DynamicFormFieldPropsType<TFormType> = Omit<FormBuilderFieldType, 'id'> & {
  control: any;
  errors: DeepMap<TFormType, FieldError>;
  page?: FormPageTypeEnum;
};

const DynamicFormField = <TFormType extends Record<string, string | boolean>>({
  control,
  type,
  name,
  value,
  itemsArray,
  label,
  maxLength,
  placeholder,
  errors,
  page,
}: DynamicFormFieldPropsType<TFormType>): React.ReactElement => {
  const ref = useRef<Input>();

  const RenedrField = useMemo(() => {
    switch (type) {
      case DynamicFieldsEnum.Input:
        return (
          <BaseInput inputTitle={false} placeholder={placeholder} ref={ref} />
        );
      case DynamicFieldsEnum.InputTitle:
        return <BaseInput inputTitle={true} inputRef={ref} />;
      case DynamicFieldsEnum.Radio:
        return <BaseRadioGroup itemsArray={itemsArray} />;
      case DynamicFieldsEnum.Select:
        return <BaseSelect itemsArray={itemsArray} label={label} page={page} />;
      case DynamicFieldsEnum.Checkbox:
        return <BaseCheckbox label={label} />;
      case DynamicFieldsEnum.TextArea:
        return <BaseTextArea />;
      case DynamicFieldsEnum.Copyable:
        return <BaseCopyable />;
      case DynamicFieldsEnum.TimePicker:
        return <BaseTimePicker />;
      case DynamicFieldsEnum.DatePicker:
        return <BaseDatePicker />;
      case DynamicFieldsEnum.InputURL:
        return <BaseInput inputTitle={false} Icon={<div>asd</div>} ref={ref} />;
      case DynamicFieldsEnum.Password:
        return (
          <BaseInput
            inputTitle={false}
            placeholder={placeholder}
            type={'password'}
            ref={ref}
          />
        );
      case DynamicFieldsEnum.SelectWithInput:
        return (
          <BaseSelect itemsArray={itemsArray} label={label} input={true} />
        );

      default:
        return <div>incorrect type</div>;
    }
  }, [type, itemsArray]);

  return (
    <Controller
      control={control}
      name={name}
      as={RenedrField}
      defaultValue={value}
      rules={{ required: true, max: maxLength, maxLength }}
      error={errors?.[name] ?? ''}
      onFocus={() => {
        // ref.current.disabled = false;
        ref.current?.focus();
      }}
    />
  );
};

export default DynamicFormField;
