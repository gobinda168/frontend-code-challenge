import styled from '@emotion/styled';
import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Colors from '../../constants/colors';
import Divider from '../common/Divider';
import DownshiftDropdown from '../common/DownshiftDropdown';
import Input from '../common/Input';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import Spacer from '../common/Spacer';
import WebView from '../common/WebView';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  address2: string;
};

const Form: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row spacing=".1rem .5rem .4rem 0">
        <Input
          fieldLabel="Name"
          name="name"
          register={register}
          errors={errors}
        />

        <Input
          fieldLabel="Email"
          name="email"
          register={register}
          errors={errors}
        />
      </Row>
      <Row spacing=".1rem .5rem .4rem 0">
        <Input
          fieldLabel="Phone"
          register={register}
          errors={errors}
          name="phone"
        />
        <DownshiftDropdown register={register} name="gender" />
      </Row>
      <Row spacing=".1rem .5rem .4rem 0">
        <Input
          register={register}
          fieldLabel="Address"
          errors={errors}
          name="address"
        />
        <Input
          register={register}
          errors={errors}
          fieldLabel="Apt/Suite/Other"
          name="address2"
        />
      </Row>
      <WebView>
        <Divider />
      </WebView>
      <Row justifyContent="space-between" spacing="2rem 0">
        <WebView>
          <RichText color={Colors.silver}>
            Lorem Ipsum dolor sit amet & Lorem Ipsum
          </RichText>
        </WebView>
        <RoundedButton
          background={Colors.aliceBlue}
          color={Colors.midNightBlue}
          onClick={handleSubmit(onSubmit)}
        >
          REFER
        </RoundedButton>
      </Row>
    </form>
  );
};

export default Form;

const FlatInput = styled.div((props: { active: boolean }) => ({
  height: '2.5rem',
  width: '20rem',
  border: '1px solid',
  borderColor: !props.active ? 'rgba(60,73,138,0.42)' : Colors.darkSlateBlue,
  borderRadius: '4px',
  position: 'relative',
  '.label': {
    position: 'absolute',
    padding: '0 .72rem',
    top: props.active ? '0' : '35%',
  },
  '.input': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0 .7rem',
    fontSize: '1.1rem',
    ':focus': {
      outline: 'none',
      border: 'none',
    },
  },
}));
