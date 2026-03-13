function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Product Grid</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        <div className="bg-white p-4 border rounded shadow hover:shadow-lg">
          <h2 className="font-semibold">Product 1</h2>
          <p>$20</p>
        </div>

        <div className="bg-white p-4 border rounded shadow hover:shadow-lg">
          <h2 className="font-semibold">Product 2</h2>
          <p>$25</p>
        </div>

        <div className="bg-white p-4 border rounded shadow hover:shadow-lg">
          <h2 className="font-semibold">Product 3</h2>
          <p>$30</p>
        </div>

      </div>
    </div>
  );
}

export default App;