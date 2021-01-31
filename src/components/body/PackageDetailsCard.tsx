import React from 'react';
import Card from '../common/Card';
import CircularIcon from '../common/CircularIcon';
import Column from '../common/Column';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';

interface Props {
  title: string;
  subTitle: string;
  price: string;
}
const PackageDetailsCard: React.FC<Props> = ({
  title,
  subTitle,
  price,
}: Props) => (
  <Column margin="1rem 0">
    <Card shadow="0px 5px 10px #A9A9A91A" hover={false}>
      <Row justifyContent="space-between">
        <Row>
          <CircularIcon color="#A9A9A966" padding=".5rem">
            <SVG src="/assets/images/aeroplane.svg" />
          </CircularIcon>
          <Column spacing="0 1rem">
            <RichText bold color="#555555">
              {title}
            </RichText>
            <RichText color="#858585" spacing=".4rem 0">
              {subTitle}
            </RichText>
          </Column>
        </Row>
        <Column>
          <RichText color="#858585">{'Estimated Price'.toUpperCase()}</RichText>
          <RichText bold color="#262758" size="1rem" spacing=".4rem 0">
            {price}
          </RichText>
        </Column>
        <RoundedButton background="#ECF4F9" color="#262758">
          Order Now
        </RoundedButton>
      </Row>
    </Card>
  </Column>
);

export default PackageDetailsCard;
