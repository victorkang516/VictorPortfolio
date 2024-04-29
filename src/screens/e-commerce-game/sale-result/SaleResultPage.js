import { useState } from "react";
import MyProductItem from "./MyProductItem";
import ProductItem from "./ProductItem";
import SelectProduct from "../select-product/SelectProduct";
import SecondaryButton from "../../../components/button/SecondaryButton";
import PrimaryButton from "../../../components/button/PrimaryButton";

const SaleResultPage = (props) => {
  const { productChoices, marketItems, startSale } = props;

  const [myProduct, setMyProduct] = useState();
  const [isSelectProductOpen, setIsSelectProductOpen] = useState(false);

  const openSelectProduct = () => {
    setIsSelectProductOpen(true);
  };

  const closeSelectProduct = () => {
    setIsSelectProductOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full h-full ">
        
      </div>
    </div>
  );
};

export default SaleResultPage;
