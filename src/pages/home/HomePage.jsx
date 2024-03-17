import Category from '../../components/category/Category';
import HeroSection from '../../components/heroSection/HeroSection';
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard';
import Layout from '../../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="grid grid-cols-4">
        <div className="flex justify-center col-start-1 mt-10 ">
          <Category />
        </div>
        <div className="grid col-start-2 col-span-3">
          <HomePageProductCard />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
