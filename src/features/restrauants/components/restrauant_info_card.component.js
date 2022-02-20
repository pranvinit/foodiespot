import React from "react";
import { SvgXml } from "react-native-svg";

// styled components imports
import {
  RestrauantInfo,
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

export default function RestrauantInfoCard({ restrauant = {} }) {
  // de-structuring properties from restrauant object

  const {
    name = "Some random restrauant",
    icon = "https://cdn2.iconfinder.com/data/icons/maki/100/lodging-512.png",
    photos = [
      "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "123 some random street NYC",
    isOpen = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restrauant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestrauantCard elevation={5}>
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
