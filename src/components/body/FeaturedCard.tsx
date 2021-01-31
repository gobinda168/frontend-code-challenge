import React from 'react';
import Card from '../common/Card';
import Column from '../common/Column';
import RichText from '../common/RichText';
import Row from '../common/Row';
import SVG from '../common/SVG';

interface Props {
  title: string;
  subTitle: string;
  icon: string;
}
const FeaturedCard: React.FC<Props> = ({ title, subTitle, icon }: Props) => {
  return (
    <Card>
      <Row>
        <SVG src={`/assets/images/${icon}`} />
        <Column>
          <Row justifyContent="space-between">
            <RichText bold>{title}</RichText>
            <SVG src="/assets/images/arrowRightBlack.png" />
          </Row>
          <RichText color="#858585" spacing=".4rem 0">
            {subTitle}
          </RichText>
        </Column>
      </Row>
    </Card>
  );
};

export default FeaturedCard;
