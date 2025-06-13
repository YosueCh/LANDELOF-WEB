import Hero from "../components/Layout/Hero";
import CategoryCollectionSection from "../components/Products/CategoryCollectionSection";
import NewProducts from "../components/Products/NewProducts";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryCollectionSection />
      <NewProducts />

      {/*Best Seller  */}
      <h2 className="text-3xl text-center font-bebas mb-4 "> Lo más vendido</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
