"use client";

import { useState } from "react";

export default function Modal({
  titulo = "Título do Modal",
  children,
  textoBotao = "Abrir Modal",
}) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
      >
        {textoBotao}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative animate-fadeIn">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">{titulo}</h2>

            <div className="text-gray-700 leading-relaxed">
              {typeof children === "function"
                ? children({ onClose: handleClose })
                : children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
