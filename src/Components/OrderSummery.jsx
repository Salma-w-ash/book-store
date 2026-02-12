import Counter from "./Counter";

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
      <h3 className="text-sm font-medium">Order summary</h3>

      {/* Item */}
      <div className="flex gap-3">
        <img
          src="https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg"
          className="w-14 h-20 object-cover rounded"
        />
        <div className="flex-1">
          <p className="text-sm font-medium">Rich Dad And Poor Dad</p>
          <p className="text-xs text-[#222222]/50">
            Author: Robert T. Kiyosaki
          </p>
          <p className="text-xs text-[#222222]/50">Free Shipping</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm font-medium">$40</p>
          <Counter/>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-[#222222]/50">Have a discount code?</p>
        <div className="flex gap-2">
          <input className="input flex-1" placeholder="Enter Promo Code" />
          <button className="bg-[#3B2F4A] text-white text-sm px-4 rounded-lg">
            Apply
          </button>
        </div>
      </div>

      {/* Totals */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-[#222222]/50">
          <span>Subtotal</span>
          <span>$80</span>
        </div>
        <div className="flex justify-between text-[#222222]/50">
          <span>Tax</span>
          <span>$4</span>
        </div>
        <div className="flex justify-between text-[#222222]/50">
          <span>Shipping</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total (USD)</span>
          <span className="text-[#D9176C]">$84</span>
        </div>
      </div>

      <button className="w-full bg-[#D9176C] hover:bg-pink-700 text-white py-2 rounded-lg">
        Confirm order
      </button>
    </div>
  );
}
