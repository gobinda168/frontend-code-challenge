/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import Row from './Row';
import SVG from './SVG';

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
  // eslint-disable-next-line no-console
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
      <FieldError>
        <Row spacing="0 .41rem">
          {errors[name] && (
            <SVG src="/assets/images/warning.png" width="10px" height="10px" />
          )}
          {errors[name]?.message ||
            (errors[name] && `${fieldLabel} is required`)}
        </Row>
      </FieldError>
    </div>
  );
};

export default Input;

const FieldError = styled.div({
  color: 'red',
});

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
