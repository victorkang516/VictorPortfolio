const ProductItem = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col justify-start items-start p-4 border-2 rounded-lg h-[260px] w-[200px] relative select-none">
      {/* <div className="absolute bg-gray-200 right-0 top-0 p-2 text-xs select-none">
        Your Product
      </div> */}
      <img
        src="https://cdn.create.vista.com/api/media/small/630348370/stock-vector-cartoon-pet-food-cat-dog-feed-packaging-home-animal-feeding"
        className="w-[150px] h-[150px]"
        alt="pet-food"
      ></img>
      <div className="font-normal">{product.name}</div>
      <div className="text-xs bg-gray-200 p-1 rounded-md">
        {product.type} Food
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-center gap-1">
          <div className="text-xs font-bold">$</div>
          <div className="text-lg font-bold">{product.price}</div>
        </div>
        <div className="font-normal text-xs">{product.sold} sold</div>
      </div>
    </div>
  );
};

export default ProductItem;
