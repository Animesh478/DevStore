function Product({ product }) {
  return (
    <div className="border border-stone-400 rounded-sm shadow-md shadow-slate-600 flex flex-col items-center max-w-70 h-80 p-3 gap-2 font-poppins">
      <a href={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </a>
      <div className="flex flex-col items-start w-full">
        <a href={`/product/${product._id}`}>
          <div className="font-semibold">{product.name}</div>
        </a>
        <h3 className="font-bold text-lg text-slate-500">₹{product.price}</h3>
      </div>
    </div>
  );
}

export default Product;
