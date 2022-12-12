import React from "react";

export const Section = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <section>{children}</section>;
};
