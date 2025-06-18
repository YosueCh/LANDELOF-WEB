import Hero from "../components/Layout/Hero";
import CategoryCollectionSection from "../components/Products/CategoryCollectionSection";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import NewProducts from "../components/Products/NewProducts";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCollection />
      <NewProducts />
      <FeaturesSection />
      {/*Best Seller  */}
      <h2 className="text-3xl text-center font-bebas mb-4  py-8  ">
        {" "}
        Lo más vendido
      </h2>
      <ProductDetails />
      <CategoryCollectionSection />
    </div>
  );
};

export default Home;
