import React from 'react';
import formatNumber from 'format-number';

const formatter = formatNumber();

export default function Passing({ data }) {
  return data.map((_, i) => (
    <p key={i}>
      Misses {_.orbiting_body} tomorrow at{' '}
      {formatter(parseInt(_.miss_distance.miles, 10))} miles whilst travelling
      at {formatNumber({ truncate: 0 })(_.relative_velocity.miles_per_hour)}mph
    </p>
  ));
}
