export default function ShippingInfo() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-sm font-medium">Shipping information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Name" defaultValue="John Smith" />
        <input className="input" placeholder="Phone" defaultValue="123456789" />
        <input
          className="input"
          placeholder="Email"
          defaultValue="johnsmith@gmail.com"
        />
        <input className="input" placeholder="City" defaultValue="Maadi" />
        <input className="input" placeholder="State" defaultValue="Cairo" />
        <input className="input" placeholder="Zip" defaultValue="11311" />
      </div>

      <input
        className="input w-full"
        placeholder="Address"
        defaultValue="Maadi, Cairo, Egypt."
      />
    </div>
  );
}
