import GreenLeft from "../../assets/gradient/Vector-green-left1.svg";
import BlueLeft from "../../assets/gradient/Vector-blue-left2.svg";
import BlueRight from "../../assets/gradient/Vector-blue-right3.svg";
import BlueCenter from "../../assets/gradient/Vector-blue-center4.svg";
import GreenRight from "../../assets/gradient/Vector-green-right5.svg";
import GreenCenter from "../../assets/gradient/Vector-green-center6.svg";
import BGImage from "../../assets/BgTab.jpg";

import {
  GradientContainer,
  Img,
  VectorBlueCenter,
  VectorBlueLeft,
  VectorBlueRight,
  VectorGreenCenter,
  VectorGreenLeft,
  VectorGreenRight,
} from "./HeroGradient.styled";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function HeroGradient() {
  const { width } = useWindowDimensions();
  return (
    <GradientContainer>
      {width <= 1024 ? (
        <Img src={BGImage} />
      ) : (
        <>
          <VectorGreenCenter>
            <Img src={GreenCenter} />
          </VectorGreenCenter>
          <VectorGreenRight>
            <Img src={GreenRight} />
          </VectorGreenRight>
          <VectorBlueCenter>
            <Img src={BlueCenter} />
          </VectorBlueCenter>
          <VectorBlueRight>
            <Img src={BlueRight} />
          </VectorBlueRight>
          <VectorBlueLeft>
            <Img src={BlueLeft} />
          </VectorBlueLeft>
          <VectorGreenLeft>
            <Img src={GreenLeft} />
          </VectorGreenLeft>
        </>
      )}
    </GradientContainer>
  );
}
