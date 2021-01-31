import styled from '@emotion/styled';
import React from 'react';
import Row from '../common/Row';
import SVG from '../common/SVG';

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
            <Card>
              <Row spacing="0 .5rem">
                <SVG src="/assets/images/form.png" />
                <Column>
                  <Row justifyContent="space-between">
                    <RichText bold>Fill up the form</RichText>
                    <SVG src="/assets/images/arrowRightBlack.png" />
                  </Row>
                  <RichText color="#858585" spacing=".4rem 0">
                    Fill in your basic information to join the Gym Club.
                  </RichText>
                </Column>
              </Row>
            </Card>
            <Card>
              <Row spacing="0 .5rem">
                <SVG src="/assets/images/find.png" />
                <Column>
                  <Row justifyContent="space-between">
                    <RichText bold>Fill up the form</RichText>
                    <SVG src="/assets/images/arrowRightBlack.png" />
                  </Row>
                  <RichText color="#858585" spacing=".4rem 0">
                    Fill in your basic information to join the Gym Club.
                  </RichText>
                </Column>
              </Row>
            </Card>
            <Card>
              <Row spacing="0 .5rem">
                <SVG src="/assets/images/progress.png" />
                <Column>
                  <Row justifyContent="space-between">
                    <RichText bold>Fill up the form</RichText>
                    <SVG src="/assets/images/arrowRightBlack.png" />
                  </Row>
                  <RichText color="#858585" spacing=".4rem 0">
                    Fill in your basic information to join the Gym Club.
                  </RichText>
                </Column>
              </Row>
            </Card>
          </Row>
        </AlignVerticle>
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const AlignVerticle = styled.div({
  transform: 'translateY(-50%)',
});

const Column = styled.div((props: { spacing?: string }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  div: {
    margin: props.spacing || '0',
  },
}));
const Card = styled.div((props) => ({
  backgroundColor: 'white',
  padding: '1rem',
  boxShadow: '0px 5px 10px #A9A9A933',
  border: '1px solid #ECECEC',
  borderRadius: '4px',
}));

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
});

const RichText = styled.div(
  (props: {
    color?: string;
    bold?: boolean;
    size?: string;
    spacing?: string;
  }) => ({
    color: props.color,
    fontSize: props.size,
    fontWeight: props.bold ? 'bold' : 'inherit',
    padding: props.spacing,
  })
);

const RoundedButton = styled.button({
  backgroundColor: '#262758',
  outline: 'none',
  color: 'white',
  border: 'none',
  textTransform: 'uppercase',
  fontWeight: 'bolder',
  padding: '0 2rem',
  borderRadius: '25px',
  height: '3rem',
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
