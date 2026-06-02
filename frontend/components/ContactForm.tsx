"use client";

import { type FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");

    // Simulate sending — replace with real API call when backend is ready
    await new Promise((resolve) => setTimeout(resolve, 800));
    setState("success");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const inputClass =
    "w-full rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-black outline-none placeholder:text-gray-400 focus:border-gray-400 focus:bg-white transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="E-Mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Betreff"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className={inputClass}
      />
      <textarea
        placeholder="Nachricht"
        required
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${inputClass} resize-none`}
      />

      {state === "success" && (
        <p className="text-sm text-green-700">
          Nachricht erfolgreich gesendet. Wir melden uns bald!
        </p>
      )}
      {state === "error" && (
        <p className="text-sm text-red-600">
          Etwas ist schiefgelaufen. Bitte versuche es erneut.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded bg-black py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-gray-800 disabled:opacity-60"
      >
        {state === "sending" ? "Wird gesendet..." : "Nachricht Senden"}
      </button>
    </form>
  );
}
