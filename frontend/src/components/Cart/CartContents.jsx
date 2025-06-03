import { GoTrash } from "react-icons/go";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Taza",
      color: "Red",
      quantity: 2,
      price: 50,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Plato",
      color: "Azul",
      quantity: 1,
      price: 80,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between p-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">color: {product.color}</p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-0 text-xl font-lato">
                  -
                </button>
                <span className="mx-4 "> {product.quantity}</span>
                <button className="border rounded px-2 py-0 text-xl font-lato">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
            <GoTrash className="h-4 w-4 mt-2 text-lande-peach ml-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
