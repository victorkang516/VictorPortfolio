import { useState } from "react";

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
      <div className="flex flex-row w-full h-full "></div>
    </div>
  );
};

export default SaleResultPage;
