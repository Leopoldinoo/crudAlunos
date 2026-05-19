'use client';
import { useState } from 'react';

export default function Modal({
  titulo = 'Título do Modal',
  children,
  textoBotao = 'Abrir Modal',
}) {
  // Estado do modal
  const [open, setOpen] = useState(false);

  /**
   * Abre o modal
   */
  const handleOpen = () => {
    setOpen(true);
  };

  /**
   * Fecha o modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* BOTÃO */}
      <button
        onClick={handleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
      >
        {textoBotao}
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          {/* CAIXA DO MODAL */}
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative animate-fadeIn">

            {/* BOTÃO FECHAR */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* TÍTULO */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {titulo}
            </h2>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="text-gray-700 leading-relaxed">
             {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
