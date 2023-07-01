import "react";
import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`p-5`}
  --c:  #ecfd04;
  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%, var(--_g) calc(200% - var(--_p, 0%)) 0%, var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  border-radius: 10px;
  transition: background-size 0.4s, background-position 0s 0.4s;

  &:hover {
    --_p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }

  &:active {
    box-shadow: 0 0 9e9Q inset #0009;
    background-color: var(--c);
    color: #fff;
  }
`;
