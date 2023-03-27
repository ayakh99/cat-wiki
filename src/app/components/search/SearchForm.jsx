"use client";

import { useEffect, useState } from "react";
import Form from "./Form";
import Modal from "./Modal";

export default function SearchForm({ data, loading }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState({
    open: false,
    content: data,
  });

  const closeModal = () => {
    setResults((prev) => ({ ...prev, open: false }));
  };

  const openModal = () => {
    setResults((prev) => ({ ...prev, open: true }));
  };

  useEffect(() => {
    if (term) {
      setResults((prev) => ({
        content: data.filter((breed) =>
          breed.name.toLowerCase().includes(term.toLowerCase())
        ),
        open: true,
      }));
    }
  }, [term]);

  return (
    <div className="md:relative">
      {loading ? (
        <Form disabled={true} />
      ) : (
        <>
          <div className="hidden md:block">
            <Form setTerm={setTerm} term={term} />
          </div>
          <div className="md:hidden">
            <Form mobile={true} openModal={openModal} />
          </div>
          <Modal
            term={term}
            setTerm={setTerm}
            results={results}
            closeModal={closeModal}
          />
        </>
      )}
    </div>
  );
}
