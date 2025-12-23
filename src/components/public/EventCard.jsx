export default function EventCard({ event }) {
  return (
    <div className="border rounded-xl shadow overflow-hidden bg-white">

      {/* IMAGE */}
      <div className="h-64 w-full">
        <img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-1">
        
        {/* KATEGORI */}
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded inline-block">
          {event.category}
        </span>

        {/* NAMA */}
        <h2 className="text-lg font-semibold">
          {event.name}
        </h2>

        {/* LOKASI */}
        <p className="text-sm text-gray-500">
          {event.location}
        </p>

        {/* TANGGAL */}
        <p className="text-sm">
          📅 {new Date(event.date).toLocaleDateString("id-ID")}
        </p>

        {/* HARGA */}
        <p className="font-bold text-green-600">
          Rp {event.price.toLocaleString("id-ID")}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => console.log("Beli:", event.name)}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
        >
          Beli
        </button>
      </div>
    </div>
  );
}

