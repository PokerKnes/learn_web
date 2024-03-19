import React from "react";
import "./FeedBackSection.scss";
import Button from "../Button/Button";
import { useState } from "react";

export default function FeedBackSection() {
  const [form, setFormState] = useState({
    name: "",
    reason: "error",
    hasError: false,
  });
  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("error");
  // const [hasError, setHasError] = useState(false);

  console.log(form);

  function handleFormChange(event) {
    setFormState((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handleFormChange}
          style={{ border: form.hasError ? "1px solid red" : null }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>
      </form>
      <Button disabled={form.hasError} isActive={!form.hasError}>
        Отправить
      </Button>
      <pre>
        Name: {form.name}
        <br />
        Reason: {form.reason}
        <br />
        hasError: {form.hasError + ""}
      </pre>
      <div className="parentPos">
      <p className="posTest">first</p>
        <p className="posTest">hi</p>
      </div>
    </section>
  );
}
