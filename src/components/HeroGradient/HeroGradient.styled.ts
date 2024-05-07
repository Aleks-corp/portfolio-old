import styled, { keyframes } from "styled-components";
import "../../assets/base.css";
import { devices } from "../../constants/breakpoints";

export const GradientContainer = styled.div`
  position: absolute;
  top: -58px;
  left: 0;
  width: 100%;
  height: 558px;
  overflow: hidden;
  @media screen and (${devices.md}) {
    width: 100%;
    height: 558px;
  }
  @media screen and (${devices.xl}) {
    height: 658px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const greenCenter = keyframes`
0% { transform: translate(0px, 0px) rotate(-54.93deg) }
50% { transform: translate(373px, -507px) rotate(-54.93deg) }
100% { transform: translate(758px, -463px) rotate(111.95deg) }
`;

export const VectorGreenCenter = styled.div`
  position: absolute;
  left: 394px;
  top: 808px;
  width: 490px;
  height: 590px;
  filter: blur(130px);
  transform-origin: 0 0;
  animation-name: ${greenCenter};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const GreenRight = keyframes`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(234px, 9px) scale(0.61, 0.71) }
100% { transform: translate(-787px, -51px) scale(1.13, 1.25) }
`;

export const VectorGreenRight = styled.div`
  position: absolute;
  left: 643px;
  top: 344px;
  width: 607px;
  height: 515px;
  filter: blur(130px);
  animation-name: ${GreenRight};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const BlueCenter = keyframes`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(428px, 13px) scale(1.19, 1.19) }
100% { transform: translate(353px, -231px) scale(1.33, 1.16) }
`;

export const VectorBlueCenter = styled.div`
  position: absolute;
  width: 457px;
  height: 445px;
  left: 263px;
  top: 231px;
  filter: blur(130px);
  animation-name: ${BlueCenter};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const BlueRight = keyframes`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(270px, -132px) scale(0.93, 1.27) }
100% { transform: translate(353px, -231px) scale(0.66, 0.95) }
`;

export const VectorBlueRight = styled.div`
  position: absolute;
  left: 1210px;
  top: 170px;
  width: 642px;
  height: 584px;
  transform: rotate(37.389deg);
  transform-origin: 0 0;
  filter: blur(130px);
  animation-name: ${BlueRight};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const BlueLeft = keyframes`
0% { transform: translate(0px, 0px) scale(1, 1) rotate(82.05deg) }
50% { transform: translate(-495px, 714px) scale(1.01, 1.16) rotate(-76.21deg) }
100% { transform: translate(622px, 1089px) scale(0.8, 1.17) rotate(-147.57deg) }
`;

export const VectorBlueLeft = styled.div`
  position: absolute;
  width: 815px;
  height: 745px;
  left: 530px;
  top: 97px;
  filter: blur(130px);
  transform-origin: 0 0;
  animation-name: ${BlueLeft};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const GreenLeft = keyframes`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(309px, -300px) scale(1.1, 1.14) }
100% { transform: translate(127px, 119px) scale(1.3, 1.15) }
`;

export const VectorGreenLeft = styled.div`
  position: absolute;
  width: 622px;
  height: 578px;
  left: 321px;
  top: 200px;
  transform: rotate(19.086deg);
  transform-origin: 0 0;
  filter: blur(130px);
  outline: 1px solid #fff;
  animation-name: ${GreenLeft};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;
