import React from "react";

import { SvgXml } from "react-native-svg";
// styled components imports
import {
  RestaurantInfo,
  CardOverlay,
  RestaurantCard,
  RestaurantCover,
  RatingContainer,
  Section,
  MetaContainer,
  Icon,
} from "./restaurant_info_card.styles";

// assets imports
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

// components import
import { Favourites } from "../../../components/favourites/favourite.component";

// animated views imports
import { FadeInView } from "../../../components/animations/fade.animation";

export default function RestaurantInfoCard({ restaurant = {}, pressed }) {
  // de-structuring properties from restaurant object
  const { name, icon, photos, rating, address, isOpen, isClosedTemporarily } =
    restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <FadeInView>
      <RestaurantCard elevation={5}>
        {pressed && <CardOverlay />}
        <Favourites restaurant={restaurant} />
        <RestaurantCover source={{ uri: photos[0] }} />
        <RestaurantInfo>
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
        </RestaurantInfo>
      </RestaurantCard>
    </FadeInView>
  );
}
