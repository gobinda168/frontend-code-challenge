import React, { useState } from 'react';
import pathUtil from '../../utils/assetsPath';
import AnimatedAsset from '../common/AnimatedAsset';
import Card from '../common/Card';
import Column from '../common/Column';
import MobileRow from '../common/MobileRow';
import RichText from '../common/RichText';
import Row from '../common/Row';
import SVG from '../common/SVG';

interface Props {
  title: string;
  subTitle: string;
  icon: string;
}
const FeaturedCard: React.FC<Props> = ({ title, subTitle, icon }: Props) => {
  const [cardHover, setCardHover] = useState(false);
  return (
    <Card
      hover
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <Row>
        <AnimatedAsset
          src={pathUtil.getImagePath(`${icon}.png`)}
          scale={cardHover ? 'scale(1.2)' : 'scale(1)'}
        />
        <Column>
          <MobileRow justifyContent="center">
            <RichText bold>{title}</RichText>
            <SVG
              src={pathUtil.getImagePath('arrowRightBlack.png')}
              cursor="pointer"
            />
          </MobileRow>
          <RichText color="#858585" spacing=".4rem 0">
            {subTitle}
          </RichText>
        </Column>
      </Row>
    </Card>
  );
};

export default FeaturedCard;
