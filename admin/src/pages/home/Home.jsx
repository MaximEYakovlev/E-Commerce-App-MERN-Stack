import "./home.css";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};
