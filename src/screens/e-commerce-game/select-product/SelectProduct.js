import ProductItem from "./ProductItem";
import SecondaryButton from "../../../components/button/SecondaryButton";
import PrimaryButton from "../../../components/button/PrimaryButton";

const SelectProduct = (props) => {
  const {
    myProduct,
    setMyProduct,
    isSelectProductOpen,
    closeSelectProduct,
    productChoices,
  } = props;

  // const [selectedProduct, setSelectedProduct] = useState(null);

  const onSelectProduct = (product) => {
    setMyProduct(product);
    console.log(product);
  };

  return (
    <div
      className={`${
        isSelectProductOpen ? "fixed" : "hidden"
      } inset-0 z-10 flex items-center justify-center overflow-y-auto`}
    >
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg z-20 w-[60vw]">
        <h2 className="text-lg font-bold mb-4">Select a Product to Sell</h2>
        <div className="flex flex-row justify-center items-center gap-2">
          {productChoices.map((product) => (
            <button
              key={product.name}
              onClick={() => {
                onSelectProduct(product);
              }}
            >
              <ProductItem
                isSelected={myProduct === product}
                name={product.name}
                price={product.price}
                type={product.type}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <SecondaryButton onClick={closeSelectProduct}>Back</SecondaryButton>
          {myProduct && (
            <PrimaryButton onClick={closeSelectProduct}>Okay</PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;
