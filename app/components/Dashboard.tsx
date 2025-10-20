export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-2xl font-bold">125</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Paid Students</h2>
          <p className="text-2xl font-bold text-green-500">100</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Unpaid Students</h2>
          <p className="text-2xl font-bold text-red-500">25</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">Total Collected</h2>
          <p className="text-2xl font-bold">$5,000</p>
        </div>
      </div>
    </div>
  );
}
