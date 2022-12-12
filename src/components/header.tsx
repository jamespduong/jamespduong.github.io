import * as React from "react";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
