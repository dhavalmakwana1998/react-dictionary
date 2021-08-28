import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const variants = [
  "h1",
  "h3",
  "body1",
  "caption",
  "caption",
  "caption",
  "caption",
  "caption",
  "caption",
];

export default function Loader() {
  return (
    <div>
      {variants.map((variant, ind) => (
        <Typography key={ind} component="div" variant={variant}>
          {<Skeleton />}
        </Typography>
      ))}
    </div>
  );
}
