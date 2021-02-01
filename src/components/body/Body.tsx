import styled from '@emotion/styled';
import React from 'react';
import Card from '../common/Card';
import CircularIcon from '../common/CircularIcon';
import Column from '../common/Column';
import DownshiftDropdown from '../common/DownshiftDropdown';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';
import FeaturedCard from './FeaturedCard';
import Heading from './Heading';
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
        <Heading
          title="Recommended Tour Packages"
          subTitle="These recommendations are based on your profile information"
        />
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
            <Row>
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Email" />
            </Row>
            <Row>
              <Input type="text" placeholder="Phone Number" />
              <DownshiftDropdown />
            </Row>
            <Row>
              <Input type="text" placeholder="Address" />
              <Input type="text" placeholder="Apt/Suite/Other" />
            </Row>
            <Divider />
            <Row justifyContent="space-between" spacing="2rem 0">
              <RichText color="#B7B7B7">
                Lorem Ipsum dolor sit amet & Lorem Ipsum
              </RichText>
              <RoundedButton background="#ECF4F9" color="#262758">
                REFER
              </RoundedButton>
            </Row>
          </Column>
          <SVG src="/assets/images/illustration.png" />
        </Row>
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const Divider = styled.div({
  borderBottom: '1px solid #9F9F9F',
  paddingTop: '1rem',
  width: '43rem',
});

const Input = styled.input({
  height: '2.5rem',
  width: '20rem',
  border: '1px solid #3C498A',
  borderRadius: '4px',
  opacity: '0.42',
  margin: '.5rem 1rem',
  paddingLeft: '.7rem',
  marginLeft: '0',
  // zIndex: -1,
  '::placeholder': {
    opacity: '1',
    color: 'black',
  },
});

const AlignVerticle = styled.div({
  transform: 'translateY(-50%)',
});

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
  paddingBottom: '4rem',
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
