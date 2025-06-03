import { HiMiniXMark } from "react-icons/hi2";
import { useEffect } from "react";

const TermsModal = ({ isOpen, onClose }) => {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-xl">
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-2xl font-lato tracking-tighter">TÉRMINOS Y CONDICIONES</h3>
          <button 
            onClick={onClose}
            className="text-lande-peach hover:text-lande-peach-dark transition-colors"
            aria-label="Cerrar modal"
          >
            <HiMiniXMark className="h-8 w-8" />
          </button>
        </div>
        
        {/* Contenido - Scrollable */}
        <div className="overflow-y-auto p-6 flex-1">
          <div className="prose max-w-none">
            <section className="mb-8">
              <h4 className="text-xl font-semibold mb-3">1. ACEPTACIÓN</h4>
              <p className="text-gray-700 mb-4">
                Al realizar una compra en nuestra tienda, usted acepta automáticamente estos términos y condiciones...
              </p>
            </section>
            
            <section className="mb-8">
              <h4 className="text-xl font-semibold mb-3">2. POLÍTICA DE ENVÍOS</h4>
              <p className="text-gray-700 mb-2">
                • Los envíos se realizan en un plazo de 3-5 días hábiles.
              </p>
              <p className="text-gray-700 mb-2">
                • Los costos de envío se calculan al finalizar la compra.
              </p>
            </section>
            
            {/* Agrega más secciones según necesites */}
          </div>
        </div>
        
        {/* Pie del modal */}
        <div className="border-t p-4 flex justify-end">
          
        </div>
      </div>
    </div>
  );
};

export default TermsModal;