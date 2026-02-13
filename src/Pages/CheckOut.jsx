import HeroSection from "../Components/HeroSection";
import Note from "../Components/Note";
import OrderSummary from "../Components/OrderSummery";
import PaymentMethod from "../Components/PaymentMethod";
import ShippingInfo from "../Components/ShippingInfo";


export default function CheckOut() {
  return (
    <>
    <HeroSection height={120}/>
      <div className="min-h-screen bg-[#f5f5f5] py-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ShippingInfo />
            <PaymentMethod />
            <Note />
          </div>

          <OrderSummary />
        </div>
      </div>
    </>
  );
}
