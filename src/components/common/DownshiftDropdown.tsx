/* eslint-disable react/jsx-props-no-spreading */
import Downshift from 'downshift';
import React from 'react';
import styled from '@emotion/styled';
import SVG from './SVG';

const items: Array<string> = ['Male', 'Female', 'Other', "Don't Specify"];
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
}
const DownshiftDropdown: React.FC<Props> = ({ register, name }: Props) => {
  return (
    <Wrapper>
      <Downshift>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <Dropdown>
              <Input
                readOnly
                placeholder="Please select"
                ref={register()}
                name={name}
                {...getInputProps()}
              />
              <Button {...getToggleButtonProps()}>
                <SVG src="/assets/images/dropdown.svg" />
              </Button>
            </Dropdown>
            <MenuContainer>
              {isOpen ? (
                <Menu {...getMenuProps()}>
                  {items.map((item, index) => (
                    <Items
                      highlighted={highlightedIndex === index}
                      selected={selectedItem === item}
                      {...getItemProps({
                        key: item,
                        index,
                        item,
                      })}
                    >
                      {item}
                    </Items>
                  ))}
                </Menu>
              ) : null}
            </MenuContainer>
          </div>
        )}
      </Downshift>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Dropdown = styled.div({
  height: '2.5rem',
  width: '20rem',
  borderRadius: '4px',
  margin: '.5rem 1rem',
  background: 'white',
  position: 'relative',
  '@media(max-width:500px)': {
    width: '85vw',
    margin: '0',
  },
});

const MenuContainer = styled.div({
  height: '0rem',
  opacity: '1',
  background: 'transparent',
  position: 'relative',
});

const Input = styled.input({
  height: '2.4rem',
  width: '20rem',
  border: '1px solid rgba(60,73,138,0.42)',
  paddingLeft: '.7rem',
  marginLeft: '0',
  '::focus': {
    outline: 'none',
    border: '1px solid rgba(60,73,138,0.92)',
  },
  '::placeholder': {
    opacity: '1',
    color: 'black',
  },
  '@media(max-width:500px)': {
    width: '85vw',
    margin: '0',
  },
});
const Button = styled.button({
  background: 'transparent',
  outline: 'none',
  border: 'none',
  position: 'absolute',
  right: '0',
  top: '35%',
  width: '1rem',
});
const Menu = styled.ul({
  display: 'block',
  background: 'white',
  width: '21rem',
  border: '1px solid white',
  borderRadius: '4px',
  margin: '0px',
  marginTop: '.41rem',
  padding: '0px',
  position: 'absolute',
  opacity: '1',
  '@media(max-width:500px)': {
    width: '85vw',
  },
});

const Items = styled.li(
  ({ highlighted, selected }: { highlighted: boolean; selected: boolean }) => ({
    padding: '.81rem 1rem',
    listStyle: 'none',
    textDecoration: 'none',
    border: '1px solid #ECECEC',
    borderRadius: ' 4px 4px 0px 0px',
    background: selected ? '#ECECEC' : 'white',
    zIndex: 100,
    opacity: '1',
    ':hover': {
      backgroundColor: '#ECECEC',
    },
    '@media(max-width:500px)': {
      padding: '0',
    },
  })
);

export default DownshiftDropdown;
