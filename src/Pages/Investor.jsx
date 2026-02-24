import Hero1 from "../Components/Banner/Hero1";
import FinancialPerformance from "../Components/Investor/FinancialPerformance";
import Contact1 from "../Components/Contact/Contact1";
import BreadCumb from "../Components/Common/BreadCumb";

const Investor = () => {
  return (
    <div className="investor-page">
      {/* <Hero1
        bgImg="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/First.png?v=1771069180"
        SubTitle="INVESTOR RELATIONS"
        Title="Financial Performance<br>& Investor Information"
        Content="Access comprehensive financial data, quarterly reports, and key announcements for our investors."
        BtnText="EXPLORE MORE"
        BtnLink="#financial"
        Image="/assets/images/hero-thumb.png"
      ></Hero1> */}
      <BreadCumb Title="Investor"></BreadCumb>
      <FinancialPerformance></FinancialPerformance>
      {/* <Contact1></Contact1> */}
    </div>
  );
};

export default Investor;


