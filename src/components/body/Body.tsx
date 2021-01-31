import styled from '@emotion/styled';
import React from 'react';
import Card from '../common/Card';
import CircularIcon from '../common/CircularIcon';
import Column from '../common/Column';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';
import FeaturedCard from './FeaturedCard';
import PackageDetailsCard from './PackageDetailsCard';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <BodyTopContainer>
        <Row justifyContent="space-between">
          <Row>
            <RichText color="#555555" size="1.5rem" bold>
              Hello&nbsp;
            </RichText>
            <RichText color="#3D3FA8" size="1.5rem" bold>
              Jimmy,
            </RichText>
          </Row>
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
            <FeaturedCard
              title="Fill up the form"
              subTitle="Fill in your basic information to join the Gym Club."
              icon="form.png"
            />

            <FeaturedCard
              icon="find.png"
              title="Find your perfect gym"
              subTitle="Easily find your perfect gym club and join the club instantly."
            />
            <FeaturedCard
              icon="progress.png"
              title="Track your progress"
              subTitle="Analyze and plan for your tasks and progress."
            />
          </Row>
        </AlignVerticle>
        <Column>
          <RichText bold size="1.2rem" spacing="1rem 0" color="#555555">
            Recommended Tour Packages
          </RichText>
          <RichText color="#858585">
            These recommendations are based on your profile information
          </RichText>
        </Column>
        <PackageDetailsCard
          title="Pilates"
          subTitle="Developed first by Joseph Pilates, after whom the technique is name…"
          price="$ 4,220/6 mo."
        />
        <PackageDetailsCard
          title="Yoga & Meditation"
          subTitle="Mantra has always believed in a Mind & Body approach which means…"
          price="$ 4,220/6 mo."
        />
        <PackageDetailsCard
          title="Kettlebell"
          subTitle="Kettlebell, the exercise routine involving a kettle shaped weight originat…"
          price="$ 4,220/6 mo."
        />
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const AlignVerticle = styled.div({
  transform: 'translateY(-50%)',
});

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
});

const BodyTopContainer = styled.div({
  backgroundColor: '#f4f4f4',
  height: '30%',
  padding: '4rem 6rem',
  paddingBottom: '0',
  borderBottomRightRadius: '2rem',
});

const BodyBottomContainer = styled.div({
  padding: '0 6rem',
});
