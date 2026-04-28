import Product from "../components/Product";
import products from "../products";

function HomePage() {
  return (
    <div className="flex flex-col gap-5 px-10 md:px-15 mt-10">
      <h1 className="text-2xl text-slate-500 font-bold font-poppins">
        Latest Products
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {products.map((product) => {
          return (
            <li key={product._id}>
              <Product product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
