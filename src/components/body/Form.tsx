import styled from '@emotion/styled';
import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Divider from '../common/Divider';
import DownshiftDropdown from '../common/DownshiftDropdown';
import Input from '../common/Input';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';

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
  const onSubmit = (data: any) => {
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
          fieldLabel="Email"
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
      <Divider />
      <Row justifyContent="space-between" spacing="2rem 0">
        <RichText color="#B7B7B7">
          Lorem Ipsum dolor sit amet & Lorem Ipsum
        </RichText>
        <RoundedButton
          background="#ECF4F9"
          color="#262758"
          onClick={handleSubmit(onSubmit)}
        >
          REFER
        </RoundedButton>
      </Row>
    </form>
  );
};

export default Form;
// const Form: React.FC = () => {
//   return (
//     <form>
//       <Row>
//         {/* <Input type="text" placeholder="Name" /> */}
//         <FlatInput>
//           <div className="label">Name</div>
//           <input type="text" className="input" />
//         </FlatInput>
//         <Input type="text" placeholder="Email" />
//       </Row>
//       <Row>
//         <Input type="text" placeholder="Phone Number" />
//         <DownshiftDropdown />
//       </Row>
//       <Row>
//         <Input type="text" placeholder="Address" />
//         <Input type="text" placeholder="Apt/Suite/Other" />
//       </Row>
//       <Divider />
//       <Row justifyContent="space-between" spacing="2rem 0">
//         <RichText color="#B7B7B7">
//           Lorem Ipsum dolor sit amet & Lorem Ipsum
//         </RichText>
//         <RoundedButton background="#ECF4F9" color="#262758">
//           REFER
//         </RoundedButton>
//       </Row>
//     </form>
//   );
// };

const FlatInput = styled.div((props: { active: boolean }) => ({
  height: '2.5rem',
  width: '20rem',
  border: '1px solid',
  borderColor: !props.active ? 'rgba(60,73,138,0.42)' : '#3C498A',
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

// const Input = styled.input({
//   height: '2.5rem',
//   width: '20rem',
//   border: '1px solid rgba(60,73,138,0.42)',
//   borderRadius: '4px',
//   margin: '.5rem 1rem',
//   paddingLeft: '.7rem',
//   marginLeft: '0',
//   ':focus': {
//     outline: 'none',
//     border: '1px solid rgba(60, 73, 138, 0.92)',
//   },
//   '::placeholder': {
//     opacity: '1',
//     color: 'black',
//   },
// });
