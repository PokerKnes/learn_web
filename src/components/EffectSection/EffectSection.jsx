import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function EffectSection() {
 const [open, openSet] = useState(false)

  function openModal() {
    openSet(true)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть модалку</Button>

      <Modal open={open}>
        <h3>Modal content</h3>
        <p>sdasdasdasdsadsadsad</p>
        <Button onClick={() => openSet(false)}>закрыть</Button>
      </Modal>
    </section>
  );
}
