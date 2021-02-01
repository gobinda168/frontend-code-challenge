/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import React, { useState } from 'react';

interface Props {
  fieldLabel: string;
  errors: any;
  register: any;
  name: string;
}
const Input: React.FC<Props> = ({
  fieldLabel,
  register,
  errors,
  name,
}: Props) => {
  const [fieldStatus, setFieldStatus] = useState(false);
  console.log(errors[name]); // watch input value by passing the name of it
  const toggleFieldStatus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) return;
    setFieldStatus(false);
  };
  return (
    <div>
      <FlatInput active={fieldStatus} onClick={() => setFieldStatus(true)}>
        <div className="label">{fieldLabel}</div>
        <input
          type="text"
          onBlur={toggleFieldStatus}
          name={name}
          className="input"
          ref={register({ required: true })}
        />
      </FlatInput>
      <div className="error">{errors[name]?.message}</div>
    </div>
  );
};

export default Input;

const FlatInput = styled.div((props: { active: boolean }) => ({
  height: '2.5rem',
  width: '21rem',
  border: '1px solid',
  borderColor: !props.active ? 'rgba(60,73,138,0.42)' : '#3C498A',
  borderRadius: '4px',
  position: 'relative',
  margin: '.1rem',

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
