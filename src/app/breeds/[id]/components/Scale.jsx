export default function Scale({ value }) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-3 w-13 rounded-lg ${
            i < value ? "bg-primary-400" : "bg-primary-50"
          }`}
        ></div>
      ))}
    </div>
  );
}
