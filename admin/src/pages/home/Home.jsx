import "./home.css";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";
import { userData } from "../../dummyData";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};
