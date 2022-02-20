import React from "react";
import { SvgXml } from "react-native-svg";

// styled components imports
import {
  RestrauantInfo,
  CardOverlay,
  RestrauantCard,
  RestrauantCover,
  RatingContainer,
  Section,
  MetaContainer,
  Icon,
} from "./restrauant_info_card.styles";

// assets imports
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

export default function RestrauantInfoCard({ restrauant = {}, pressed }) {
  // de-structuring properties from restrauant object
  const { name, icon, photos, rating, address, isOpen, isClosedTemporarily } =
    restrauant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestrauantCard elevation={5}>
      {pressed && <CardOverlay />}
      <RestrauantCover source={{ uri: photos[0] }} />
      <RestrauantInfo>
        <CustomText variant="label">{name}</CustomText>
        <Section>
          <RatingContainer>
            {ratingArray.map((rating, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </RatingContainer>
          <MetaContainer>
            <Spacer position="right" size="medium">
              {isClosedTemporarily && (
                <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
              )}
            </Spacer>
            <Spacer position="right" size="medium">
              {isOpen && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Icon source={{ uri: icon }} />
          </MetaContainer>
        </Section>
        <CustomText variant="caption">{address}</CustomText>
      </RestrauantInfo>
    </RestrauantCard>
  );
}
