import { useState } from "react";
import MyProductItem from "./MyProductItem";
import ProductItem from "./ProductItem";
import SelectProduct from "../select-product/SelectProduct";
import SecondaryButton from "../../../components/button/SecondaryButton";
import PrimaryButton from "../../../components/button/PrimaryButton";

const MarketPlacePage = (props) => {
  const { productChoices, marketItems, startSale, changeGameState } = props;

  const [myProduct, setMyProduct] = useState();
  const [isSelectProductOpen, setIsSelectProductOpen] = useState(false);

  const openSelectProduct = () => {
    setIsSelectProductOpen(true);
  };

  const closeSelectProduct = () => {
    setIsSelectProductOpen(false);
  };

  return (
    <div className="w-[90vw] m-auto bg-white h-[90vh] rounded-lg">
      <div className="flex flex-col">
        <div className="flex flex-row w-full h-full ">
          {/* Market place */}
          <div className="flex flex-col p-8 w-full h-[90vh]">
            <div className="flex flex-row justify-between items-center mb-4">
              <div>Market Place</div>
            </div>
            <div className="flex flex-row justify-center items-start w-full overflow-y-auto h-full">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 p-2 gap-2">
                {marketItems.map((item) => (
                  <ProductItem product={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex flex-row border-[1px]"></div>

          {/* My Shop */}
          <div className="flex flex-col justify-between p-8 h-[90vh] gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center mb-4">
                <div>My Shop</div>
              </div>
              {myProduct != null ? (
                <MyProductItem
                  myProduct={myProduct}
                  onClick={openSelectProduct}
                />
              ) : (
                <button
                  onClick={openSelectProduct}
                  className="flex justify-center items-center border-2 h-[240px] w-[200px] rounded-md hover:-translate-y-1 hover:border-blue-200 transition-all"
                >
                  Select Product
                </button>
              )}
            </div>
            <PrimaryButton onClick={startSale}>Start Sale</PrimaryButton>
          </div>
        </div>

        <SelectProduct
          myProduct={myProduct}
          setMyProduct={setMyProduct}
          isSelectProductOpen={isSelectProductOpen}
          closeSelectProduct={closeSelectProduct}
          productChoices={productChoices}
        />
      </div>
    </div>
  );
};

export default MarketPlacePage;
