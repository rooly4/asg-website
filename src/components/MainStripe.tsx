import React from "react";
import styled from "styled-components";

import { stripes } from "../styles/colors";

interface StripeSvgProps {
  index: number;
}

interface StripeProps {
  color: string;
  index: number;
}

/**
 * Contains all of the main stripes
 */
const StripesContainer = styled.div`
  position: relative;
  height: 25vw;
  overflow: hidden;
  width: 100%;
  z-index: -1;
`;

/**
 * Sets clipping path so stripes can overlap
 */
const ClippingPath = styled.div`
  position: relative;
  margin-top: -20vw;
`;

/**
 * Generates an svg with dynamic alignment
 */
const StripeSvg = styled.svg(
  (props: StripeSvgProps) => `
  position: absolute;
  top: ${props.index * 10}px;
  width: 100%;
  height: 40vw;
  z-index: -${props.index};
`
);

/**
 * Generates stripes for MainStripe.
 * @param: props. First color is used for background above stripes
 */
const makeStripe: React.FC<StripeProps> = ({ color, index }) => (
  <StripeSvg
    index={index}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 200"
    preserveAspectRatio="none"
  >
    <polygon fill={color} points="0,0 0,200 100,110 100,0" />
  </StripeSvg>
);

const MainStripe: React.FC = () => (
  <StripesContainer>
    <ClippingPath>
      {[
        stripes.blue,
        stripes.white,
        stripes.yellow,
        stripes.red,
        stripes.blue,
      ].map((color: string, index: number) => makeStripe({ color, index }))}
    </ClippingPath>
  </StripesContainer>
);

export default MainStripe;
