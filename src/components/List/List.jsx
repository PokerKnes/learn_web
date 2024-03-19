import React from "react";

export default function List({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong>
      </p>
      <p>{description}</p>
    </li>
  );
}
