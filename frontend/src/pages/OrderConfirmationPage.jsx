const OrderConfirmationPage = () => {
  const checkout = {
    id: "123522",
    createAt: new Date(),
    checkoutItems: [
      {
        productId: 1,
        name: "Taza",
        color: "Red",
        quantity: 2,
        price: 50,
        image: "https://picsum.photos/150?random=1",
      },
      {
        productId: 2,
        name: "Plato",
        color: "Blue",
        quantity: 1,
        price: 80,
        image: "https://picsum.photos/150?random=2",
      },
    ],
    shippingAddress: {
      streetName: "Del cometa",
      streetNumber: "315",
      interiorNumber: "",
      neighborhood: "Villas de la cantera",
      zipCode: "20200",
      municipality: "Aguascalientes",
      city: "",
      state: "Aguascalientes",
    },
  };

  // Calcular el total de la compra
  const total = checkout.checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const calculateEstimateDelivery = (createAt) => {
    const orderDate = new Date(createAt);
    const minDeliveryDate = new Date(orderDate);
    const maxDeliveryDate = new Date(orderDate);

    // Suma días hábiles (excluyendo sábados y domingos)
    let daysAdded = 0;
    while (daysAdded < 3) {
      minDeliveryDate.setDate(minDeliveryDate.getDate() + 1);
      if (minDeliveryDate.getDay() !== 0 && minDeliveryDate.getDay() !== 6) {
        daysAdded++;
      }
    }

    daysAdded = 0;
    while (daysAdded < 5) {
      maxDeliveryDate.setDate(maxDeliveryDate.getDate() + 1);
      if (maxDeliveryDate.getDay() !== 0 && maxDeliveryDate.getDay() !== 6) {
        daysAdded++;
      }
    }

    return `${minDeliveryDate.toLocaleDateString()} - ${maxDeliveryDate.toLocaleDateString()}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bebas text-center text-lande-orang">
        ¡Gracias por tu compra!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/*Order Id and Date */}
            <div className="font-lato">
              <h2 className="text-xl font-semibold">
                Número de orden: {checkout.id}
              </h2>
              <p className="text-gray-500">
                Fecha de orden:{" "}
                {new Date(checkout.createAt).toLocaleDateString()}
              </p>
            </div>
            {/*Estimated Delivery */}
            <div className="font-lato text-sm text-right">
              <p>Fecha estimada de entrega:</p>
              <p className="font-semibold text-lande-peach">
                {calculateEstimateDelivery(checkout.createAt)}
              </p>
            </div>
          </div>

          {/*Order Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-lg pb-2 font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-500">
                    Precio Unitario: ${item.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Cantidad: {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-md font-semibold">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total de la compra */}
          <div className="flex justify-end mb-8">
            <div className="text-right border-t pt-4 w-64">
              <h3 className="text-xl font-semibold">
                Total: ${total.toLocaleString()}
              </h3>
            </div>
          </div>

          {/*Payment and Delivery Info*/}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-lato mb-2">Método de pago</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/*Delivery Information */}
            <div>
              <h4 className="text-lg font-lato mb-2">Datos de Envío</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.streetName},{" #"}
                {checkout.shippingAddress.streetNumber}
                {checkout.shippingAddress.interiorNumber &&
                  `, Int ${checkout.shippingAddress.interiorNumber}`}
                , {checkout.shippingAddress.neighborhood}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.state}
                {checkout.shippingAddress.city &&
                  `, ${checkout.shippingAddress.city}`}
                {checkout.shippingAddress.municipality &&
                  `, ${checkout.shippingAddress.municipality}`}
                {`, C.P. ${checkout.shippingAddress.zipCode}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;