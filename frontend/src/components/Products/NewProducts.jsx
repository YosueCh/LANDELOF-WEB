import { useEffect, useRef, useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newProducts = [
    {
      _id: "1",
      name: "Taza de gato",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=1",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "2",
      name: "Taza de tortuga",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=2",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "3",
      name: "Taza de gato3",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=3",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "4",
      name: "Taza de gato4",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=4",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "5",
      name: "Taza de gato5",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=5",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "6",
      name: "Taza de gato6",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=6",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "7",
      name: "Taza de gato7",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=7",
          altText: "Taza de gato",
        },
      ],
    },
    {
      _id: "8",
      name: "Taza de gato8",
      price: 150,
      images: [
        {
          url: "http://picsum.photos/500/500?random=8",
          altText: "Taza de gato",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = "auto";
    scrollRef.current.style.scrollSnapType = "none";
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 3;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    // Actualiza los botones durante el arrastre
    requestAnimationFrame(() => {
      updateScrollButtons();
    });
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollRef.current.style.scrollBehavior = "smooth";
      scrollRef.current.style.scrollSnapType = "x mandatory"; // Reactiva snap al soltar
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  };

  //Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const tolerance = 1;

    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
      canScrollRight: canScrollRight,
      canScrollLeft: canScrollLeft,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleResize = () => updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", handleResize);

    // Verificación inicial
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", handleResize);
    };
  }, [newProducts]);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bebas mb-4">Explora nuevos productos</h2>
        <p className="text-lg text-lande-amber">
          Descubre los últimos productos que acaban de salir del horno antes que
          se agoten
        </p>

        {/*Scroll Buttons */}
        <div className=" right-0 bottom-[-30px] flex justify-center mt-6 space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1 rounded-full focus:outline-none" // Eliminamos el padding
          >
            <TfiArrowCircleLeft
              className={`text-2xl transition-all duration-200 ${
                canScrollLeft
                  ? "text-lande-peach-ligth hover:text-lande-peach hover:text-3xl"
                  : "text-gray-400 cursor-not-allowed "
              }`}
            />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1 rounded-full focus:outline-none"
          >
            <TfiArrowCircleRight
              className={`text-2xl transition-all duration-200 ${
                canScrollRight
                  ? "text-lande-peach-ligth hover:text-lande-peach hover:text-3xl"
                  : "text-gray-400 cursor-not-allowed "
              }`}
            />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-auto flex space-x-6 relative snap-x snap-mandatory ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overflowScrolling: "touch",
          willChange: "transform", // Mejor para performance en drag
          scrollbarWidth: "none", // Oculta scrollbar en Firefox
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newProducts.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%]  sm:min-w-[50vw] lg:min-w-[30%] snap-start relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg font-quicksand">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-lato">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
