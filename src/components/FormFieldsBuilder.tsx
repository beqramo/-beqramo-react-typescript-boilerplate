import React, { useCallback } from 'react';

import { DynamicFormField } from 'components/baseComponents';
import {
  Control,
  DeepMap,
  DeepPartial,
  FieldError,
  FieldValues,
  LiteralToPrimitive,
  NestedValue,
  SetValueConfig,
  UnpackNestedValue,
} from 'react-hook-form';
import { Text } from 'components/styles';
import { FieldRowWrapper } from './FormFieldsBuilder.styled';
import { FormPageTypeEnum } from 'utils/enums';

type FormFieldsBuilderProps<TFormType extends FieldValues> = {
  fieldsData: FormSectionWrapperType[];
  watch: (name: keyof TFormType, defaultValue: string | boolean) => string;
  setValue: <TFieldName extends string>(
    name: TFieldName,
    value: TFormType extends NestedValue<infer U>
      ? U
      : UnpackNestedValue<DeepPartial<LiteralToPrimitive<TFormType>>>,
    option?: SetValueConfig,
  ) => void;
  control: Control<TFormType>;
  errors: DeepMap<TFormType, FieldError>;
  page?: FormPageTypeEnum;
};

const FormFieldsBuilder = <TFormType extends Record<string, string | boolean>>({
  fieldsData,
  watch,
  setValue,
  control,
  errors,
  page,
}: FormFieldsBuilderProps<TFormType>): React.ReactElement => {
  return (
    <>
      {fieldsData.map(({ fields, bottomDescription, ...data }) => (
        <>
          {fields?.map((field, index) => (
            <FieldRowWrapper
              index={index}
              length={fields.length}
              key={field.id}
              $customType={field.customType}
              align={'middle'}
            >
              <DynamicFormField<TFormType>
                control={control}
                key={field.id}
                {...field}
                errors={errors}
                page={page}
              />
            </FieldRowWrapper>
          ))}
          {bottomDescription && (
            <Text
              fontSize={12}
              lineHeight={16}
              color={'#7D8CA299'}
              className={'bottom-text'}
            >
              {bottomDescription}
            </Text>
          )}
        </>
      ))}
    </>
  );
};

export default FormFieldsBuilder;
