import React from "react";
import Responsive from "react-responsive";

export const Desktop = props => (
  <Responsive {...props} minWidth={992}>
    <div className="desktop">{props.children}</div>
  </Responsive>
);

export const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={991}>
    <div className="tablet">{props.children}</div>
  </Responsive>
);

export const Mobile = props => (
  <Responsive {...props} maxWidth={767}>
    <div className="mobile">{props.children}</div>
  </Responsive>
);
