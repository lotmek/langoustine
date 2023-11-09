import "react";
import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw` 
  text-quaternary font-semibold
  bg-[#006e9d] hover:bg-[#004774 ]
  p-5
  focus:outline-none
  focus:ring-4 focus:ring-primary
  rounded-lg
  cursor-pointer
  disabled:hover:cursor-default
  disabled:bg-gray-500
`}
`;
