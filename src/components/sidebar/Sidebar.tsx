import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import RoundedContainer from '../roundedContainer/RoundedContainer';

interface Props {
  borderRadius: string;
}
const initialMenuItems = [
  { id: '1', menuItem: 'Dashboard', selected: false, badge: false },
  { id: '2', menuItem: 'Tasks', selected: false, badge: true },
  { id: '3', menuItem: 'Gym Clubs', selected: false, badge: false },
  { id: '4', menuItem: 'Your Connections', selected: false, badge: false },
  { id: '5', menuItem: 'Settings', selected: false, badge: false },
];

const Sidebar: React.FC = () => {
  const badgeValue = 2;
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const handleMenuSelect = (id: number) => {
    const newMenu = [...initialMenuItems];
    newMenu[id] = { ...newMenu[id], selected: true };
    setMenuItems(newMenu);
  };

  useEffect(() => {
    handleMenuSelect(0);
  }, []);

  return (
    <SidebarContainer borderRadius="0 47px 0 0">
      <div>
        <Top>
          <Avatar imageUrl="/assets/images/profile@2x.png" />
          <Text>Jimmy Hendrix</Text>
          <Text underline opacity="0.8" cursor="pointer">
            View Profile
          </Text>
        </Top>
        <Menu>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={menuItem.id}
              selected={menuItem.selected}
              onClick={() => handleMenuSelect(index)}
            >
              <Text opacity="1" cursor="pointer">
                {menuItem.menuItem}
              </Text>
              {menuItem.badge && <Badge>{badgeValue}</Badge>}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <FooterContainer>
        <FooterTop>
          <Text>My Mentor</Text>
          <SVG
            src="/assets/images/rightArrowSmall.png"
            alt="arrowRight"
            cursor="pointer"
          />
        </FooterTop>
        <FooterBottom>
          <Text>Jimmy Page</Text>
          <Row spacing="1rem">
            <CircleIcon>
              <SVG src="/assets/images/call.svg" cursor="pointer" />
            </CircleIcon>
            <CircleIcon>
              <SVG src="/assets/images/mail.svg" cursor="pointer" />
            </CircleIcon>
            <CircleIcon>
              <SVG src="/assets/images/chat.svg" cursor="pointer" />
            </CircleIcon>
          </Row>
        </FooterBottom>
      </FooterContainer>
    </SidebarContainer>
  );
};
export default Sidebar;

const Badge = styled.div({
  width: '32px',
  height: '17px',
  background: '#FFC933 0% 0% no-repeat padding-box',
  borderRadius: '9px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  marginLeft: '1rem',
});

const Row = styled.div((props: { spacing?: string }) => ({
  display: 'flex',
  margin: '1rem 0',
  div: {
    marginRight: props.spacing,
  },
}));
const CircleIcon = styled.div({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: '#4446BE',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '0.7',
  cursor: 'pointer',
});
const SVG = styled.img((props: { cursor?: string }) => ({
  cursor: props.cursor || 'auto',
}));
const SidebarContainer = styled.div((props: Props) => ({
  minWidth: '223px',
  background:
    'transparent linear-gradient(345deg, #262758 0%, #4042B1 100%) 0% 0% no-repeat padding-box',
  borderRadius: props.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2rem 0',
}));

const FooterContainer = styled.div({
  backgroundColor: 'rgba(68,70,190,0.24)',
  height: '10rem',
  margin: '0 2rem',
  borderRadius: '0px 23px 0px 24px',
});

const FooterTop = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1.5rem 1rem 1rem',
  borderBottom: '1px solid rgba(68,70,190,0.64)',
  color: 'white',
});

const FooterBottom = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 1.5rem 1rem 1rem',
  color: 'white',
});
const Avatar = styled.div((props: { imageUrl: string }) => ({
  height: '60px',
  width: '60px',
  borderRadius: '50%',
  padding: '0',
  backgroundImage: `url(${props.imageUrl})`,
  border: '1px solid #A0A4DF',
  backgroundPosition: 'center',
  boxShadow: '0px 3px 6px #00000029',
  backgroundSize: '80px 90px',
  opacity: '0.85',
}));

const Top = styled.div({
  margin: '0 2.5rem',
  color: 'white',
  fontsize: '1rem',
  div: {
    marginTop: '.6rem',
  },
});

const Text = styled.div(
  (props: { underline?: boolean; opacity?: string; cursor?: string }) => ({
    textAlign: 'left',
    font: 'normal normal .8rem Inter',
    textDecoration: props.underline ? 'underline' : 'none',
    opacity: props.opacity,
    fontFamily: 'Inter',
    cursor: props.cursor || 'auto',
  })
);

const Menu = styled.div({
  marginTop: '45px',
  fontFamily: 'Inter',
});

const MenuItem = styled.div((props: { selected: boolean }) => ({
  display: 'flex',
  padding: '0 2.5rem',
  alignItems: 'center',
  marginTop: '4px',
  height: '2.7rem',
  borderRadius: '0 23px 0 24px',
  backgroundColor: props.selected ? 'rgba(242,242,242, 0.1)' : 'transparent',
  color: 'white',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(242,242,242, 0.1)',
  },
}));
