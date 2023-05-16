import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "pet store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
    </>
  );
};

export default Home;
