import styled from '@emotion/styled';
import React from 'react';
import Card from '../common/Card';
import Column from '../common/Column';
import MobileRow from '../common/MobileRow';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';
import FeaturedCard from './FeaturedCard';
import Form from './Form';
import Heading from './Heading';
import PackageDetailsCard from './PackageDetailsCard';

const featuredCard = [
  {
    id: 1,
    title: 'Fill up the form',
    subTitle: 'Fill in your basic information to join the Gym Club.',
    icon: 'form',
  },
  {
    id: 2,
    icon: 'find',
    title: 'Find your perfect gym',
    subTitle: 'Easily find your perfect gym club and join the club instantly.',
  },
  {
    id: 3,
    icon: 'progress',
    title: 'Track your progress',
    subTitle: 'Analyze and plan for your tasks and progress.',
  },
];

const packageDetails = [
  {
    id: 1,
    title: 'Pilates',
    subTitle:
      'Developed first by Joseph Pilates, after whom the technique is name…',
    price: '$ 4,220/6 mo.',
  },
  {
    id: 2,
    title: 'Yoga & Meditation',
    subTitle:
      'Mantra has always believed in a Mind & Body approach which means…',
    price: '$ 4,220/6 mo.',
  },
  {
    id: 3,
    title: 'Kettlebell',
    subTitle:
      'Kettlebell, the exercise routine involving a kettle shaped weight originat…',
    price: '$ 4,220/6 mo.',
  },
];
const Body: React.FC = () => {
  return (
    <BodyContainer>
      <BodyTopContainer>
        <Row justifyContent="space-between">
          <MobileRow spacing="1rem 0">
            <RichText color="#555555" size="1.5rem" bold>
              Hello&nbsp;
            </RichText>
            <RichText color="#3D3FA8" size="1.5rem" bold>
              Jimmy,
            </RichText>
          </MobileRow>
          <RoundedButton>Find a Gym Club</RoundedButton>
        </Row>
        <Row spacing="1rem 0">
          <RichText color="#2C2C2C" size="2rem">
            What do you want to do today?
          </RichText>
        </Row>
      </BodyTopContainer>
      <BodyBottomContainer>
        <AlignVerticle>
          <Row spacing="0 1rem">
            {featuredCard.map(({ id, title, subTitle, icon }) => (
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
        {packageDetails.map(({ id, title, subTitle, price }) => (
          <PackageDetailsCard
            key={id}
            title={title}
            subTitle={subTitle}
            price={price}
          />
        ))}

        <Column spacing="1rem 0 0 0">
          <RichText size="1.2rem" bold color="#555555">
            Refer and Earn
          </RichText>
          <RichText color="#858585">
            Add your refferel and earn&nbsp;
            <b>5$</b>
            &nbsp;after they sign up.
          </RichText>
        </Column>

        <RichText spacing="2rem 0 .5rem 0" color="#555555">
          Basic Information
        </RichText>
        <Row justifyContent="space-between">
          <Column>
            <Form />
          </Column>
          <SVG src="/assets/images/illustration.png" />
        </Row>
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

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
    height: '45%',
    width: '100vw',
    padding: '0',
    marginBottom: '2rem',
  },
});

const BodyBottomContainer = styled.div({
  padding: '0 6rem',
  '@media(max-width:500px)': {
    padding: '0',
    marginTop: '2rem',
  },
});
