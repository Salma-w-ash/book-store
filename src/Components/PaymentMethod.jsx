export default function PaymentMethod() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-sm font-medium">Payment Method</h3>

      <div className="flex gap-3">
        <button className="payment-btn">Online payment</button>
        <button className="payment-btn active">Cash on delivery</button>
        <button className="payment-btn">POS on delivery</button>
      </div>
    </div>
  );
}
