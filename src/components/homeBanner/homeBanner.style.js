import { Grid } from "@mui/material";
import styled from "styled-components";
import backImg from "../../assets/images/xhome-banner.png.pagespeed.ic.2CPOYBkyjE.webp";

export const MainBanner = styled(Grid)`
`;

export const HomeBannerArea = styled.section`
  background-image: url(${backImg});
  background-position: center;
  min-height: 890px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
