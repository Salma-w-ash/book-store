export default function ShippingInfo() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-sm font-medium text-[#222222]">
        Shipping information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm text-[#222222]/50">Name</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="John Smith"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-[#222222]/50">Phone</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="123456789"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-[#222222]/50">Email</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="johnsmith@gmail.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-[#222222]/50">City</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Maadi"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-[#222222]/50">State</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Cairo"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-[#222222]/50">Zip</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="11311"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-[#222222]/50">Address</label>
        <input
          className="w-full border border-gray-300 rounded-lg p-2"
          placeholder="Maadi, Cairo, Egypt."
        />
      </div>
    </div>
  );
}
