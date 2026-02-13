export default function Note() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-3">
      <h3 className="text-sm font-medium">Note</h3>
      <textarea
        rows="4"
        className="w-full border border-gray-300 rounded-lg p-2 resize-none"
        placeholder="Add note"
      />
    </div>
  );
}
