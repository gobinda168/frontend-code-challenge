import styled from '@emotion/styled';
import React from 'react';
import Colors from '../../constants/colors';
import sampleData from '../../constants/data';
import pathUtil from '../../utils/assetsPath';
import Column from '../common/Column';
import MobileRow from '../common/MobileRow';
import MobileView from '../common/MobileView';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import Spacer from '../common/Spacer';
import SVG from '../common/SVG';
import WebView from '../common/WebView';
import FeaturedCard from './FeaturedCard';
import Form from './Form';
import Heading from './Heading';
import PackageDetailsCard from './PackageDetailsCard';

interface Props {
  toggleSidebar: () => void;
}
const Body: React.FC<Props> = ({ toggleSidebar }: Props) => {
  return (
    <BodyContainer>
      <BodyTopContainer>
        <Row justifyContent="space-between">
          <MobileView>
            <IconButton onClick={toggleSidebar}>
              <SVG src={pathUtil.getImagePath('down.png')} />
            </IconButton>
          </MobileView>
          <MobileRow spacing="1rem 0">
            <RichText color={Colors.darkGrey} size="1.5rem" bold>
              Hello&nbsp;
            </RichText>
            <RichText color={Colors.darkSlateBlue} size="1.5rem" bold>
              Jimmy,
            </RichText>
          </MobileRow>
          <RoundedButton>Find a Gym Club</RoundedButton>
        </Row>
        <Row spacing="1rem 0">
          <RichText color={Colors.darkestGrey} size="2rem">
            What do you want to do today?
          </RichText>
        </Row>
      </BodyTopContainer>
      <BodyBottomContainer>
        <AlignVerticle>
          <Row spacing="0 1rem">
            {sampleData.featuredCard.map(({ id, title, subTitle, icon }) => (
              <FeaturedCard
                key={id}
                title={title}
                subTitle={subTitle}
                icon={icon}
              />
            ))}
          </Row>
        </AlignVerticle>
        <Heading
          title="Recommended Tour Packages"
          subTitle="These recommendations are based on your profile information"
        />
        {sampleData.packageDetails.map(({ id, title, subTitle, price }) => (
          <PackageDetailsCard
            key={id}
            title={title}
            subTitle={subTitle}
            price={price}
          />
        ))}

        <Spacer margin="0 .6rem">
          <Column spacing="1rem 0 0 0">
            <RichText size="1.2rem" bold color={Colors.darkGrey}>
              Refer and Earn
            </RichText>
            <RichText color={Colors.grey}>
              Add your refferel and earn&nbsp;
              <b>5$</b>
              &nbsp;after they sign up.
            </RichText>
          </Column>

          <RichText spacing="2rem 0 .5rem 0" color={Colors.darkGrey}>
            Basic Information
          </RichText>
        </Spacer>
        <Row justifyContent="space-between">
          <Column>
            <Form />
          </Column>
          <WebView>
            <SVG src={pathUtil.getImagePath('illustration.png')} />
          </WebView>
        </Row>
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const IconButton = styled.button({
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  ':focus': {
    border: 'none',
    outline: 'none',
  },
});

const AlignVerticle = styled.div({
  transform: 'translateY(-50%)',
  '@media(max-width:500px)': {
    transform: 'none',
  },
});

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
  paddingBottom: '4rem',
  '@media(max-width:500px)': {
    paddingBottom: '1rem',
  },
});

const BodyTopContainer = styled.div({
  backgroundColor: '#f4f4f4',
  height: '30%',
  padding: '4rem 6rem',
  paddingBottom: '0',
  borderBottomRightRadius: '2rem',
  '@media(max-width:500px)': {
    height: '19rem',
    width: '100vw',
    padding: '0',
    marginBottom: '2rem',
  },
});

const BodyBottomContainer = styled.div({
  padding: '0 6rem',
  '@media(max-width:500px)': {
    padding: '0 1rem',
    marginTop: '2rem',
  },
});
