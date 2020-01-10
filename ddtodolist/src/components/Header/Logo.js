import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Section from "./Section";

import logo from "../../assets/image/dadong1.jpg";

const Image = styled.img.attrs({
  src: logo,
  alt: "dadong logo"
})`
  height: 55px;
  margin: 5px;
`;

const StyleLink = styled(Link)`
  color: inherit;w
  text-decoration: none;
`;

const Logo = ({ small }) => (
  <StyleLink to="/home">
    <Section mr>
      <Image />
      <div> </div>
      {small ? null : <Typography variant="h6">大东 </Typography>}
    </Section>
  </StyleLink>
);

export default Logo;
