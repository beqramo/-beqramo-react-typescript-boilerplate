import React from 'react';
import { Row, Col } from 'antd';
import { Controller } from 'react-hook-form';

import { RegistrationPageStyled } from './RegistrationPage.styled';
import { BaseCheckbox, BaseSecondaryButton } from 'components/baseComponents';
import { FormFieldsBuilder } from 'components';
import LoaderLine from 'components/common/LoaderLine';
import useRegistration from './useRegistration';
import { FormPageTypeEnum } from 'utils/enums';

const RegistrationPage = (): React.ReactElement => {
  const {
    loading,
    onSubmit,
    handleSubmit,
    control,
    setValue,
    watch,
    errors,
    fieldData,
  } = useRegistration();

  return (
    <RegistrationPageStyled onSubmit={handleSubmit(onSubmit)}>
      <Col span={24} className={'content__form-container'}>
        <FormFieldsBuilder<RegistrationFormType>
          fieldsData={fieldData}
          control={control}
          setValue={setValue}
          watch={watch}
          errors={errors}
          page={FormPageTypeEnum.registration}
        />
      </Col>
      <Row
        align={'middle'}
        justify={'end'}
        className={'content__submit-container'}
      >
        <Controller
          control={control}
          name={'stayLoggedIn'}
          as={BaseCheckbox}
          defaultValue={false}
          label={'Stay Logged In'}
          type={'checkbox'}
        />
        <BaseSecondaryButton
          title={'Register'}
          className={'btn--fill'}
          backgroundColor={'#5C5BC1'}
          htmlType={'submit'}
        />
      </Row>
    </RegistrationPageStyled>
  );
};

export default RegistrationPage;
