import { useEffect, useState } from "react";
import { toast } from "sonner";

const selectedProduct = {
  name: "Maceta de Dinosaurio",
  price: 500,
  originalPrice: 600,
  description: "Este es un producto perfecto para regalo",
  colors: ["yellow", "green"],
  material: "Arcilla natural",
  measures: "alto: 15cm ancho: 7cm",
  technique: "modelado",

  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Maceta de Dinosaurio",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Maceta de Dinosaurio 2",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("null");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus" && quantity < 15) {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Por favor, selecciona un color para agregar al carrito", {
        duration: 2000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Producto agregado al carrito", {
        duration: 2000,
      });
      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className=" flex flex-col md:flex-row ">
          {/*Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altTex || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/*Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Producto Principal"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/*Mobile Thumnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altTex || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/*Right Side*/}
          <div className="md:w-22 md:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-lande-amber mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-sm  text-gray-400 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `$ ${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-lande-peach mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4" >
              {selectedProduct.description}
            </p>

            {/*Color selector */}
            <div className="mb-4">
              <p className="text-gray-700 font-bold pt-2">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${
                      selectedColor === color
                        ? "border-[3px] border-white ring-1 ring-black"
                        : "border border-white"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.9)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-bold ">Cantidad:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-2 bg-gray-200 rounded text-lg"
                  disabled={quantity <= 1} // Se desactiva cuando quantity es 1 o menor
                  style={{ opacity: quantity <= 1 ? 0.3 : 1 }} // Opacidad reducida cuando está desactivado
                >
                  -
                </button>
                <span className=" text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-2 bg-gray-200 rounded text-lg"
                  disabled={quantity >= 10}
                  style={{ opacity: quantity >= 10 ? 0.3 : 1 }}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`font-quicksand text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-lande-peach-2 hover:bg-lande-peach"
              }`}
            >
              {isButtonDisabled ? "Agregando..." : "Agregar a carrito"}
            </button>

            <div className=" mt-10 text-gray-700 ">
              <h3 className="text-xl font-bold mb-4">Caracteristicas:</h3>
              <table className=" w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className=" py-1 text-gray-900">Material:</td>
                    <td className=" py-1">{selectedProduct.material}</td>
                  </tr>
                  <tr>
                    <td className=" py-1 text-gray-900">Técnica</td>
                    <td className=" py-1">{selectedProduct.technique}</td>
                  </tr>
                  <tr>
                    <td className=" py-1 text-gray-900">Medidas:</td>
                    <td className=" py-1">{selectedProduct.measures}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
