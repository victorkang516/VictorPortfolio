import { useEffect, useState } from "react";
import InitialPage from "./e-commerce-game/initial/InitialPage";
import MarketPlacePage from "./e-commerce-game/market-place/MarketPlacePage";
import SaleResultPage from "./e-commerce-game/sale-result/SaleResultPage";

const productList = [
  {
    name: "Cooked Beef",
    price: 140.0,
    type: "Dog",
    sold: 0,
    saleRate: 1,
  },
  {
    name: "Raw Pork Meat",
    price: 80.0,
    type: "Dog",
    sold: 0,
    saleRate: 2,
  },
  {
    name: "Juciy Turkey",
    price: 100.0,
    type: "Dog",
    sold: 0,
    saleRate: 4,
  },
  {
    name: "Canned Tuna",
    price: 130.0,
    type: "Cat",
    sold: 0,
    saleRate: 4,
  },
  {
    name: "Raw Salmon",
    price: 110.0,
    type: "Cat",
    sold: 0,
    saleRate: 5,
  },
  {
    name: "Rat Meat",
    price: 110.0,
    type: "Cat",
    sold: 0,
    saleRate: 1,
  },
  {
    name: "Healthy Hay",
    price: 200.0,
    type: "Rabbit",
    sold: 0,
    saleRate: 2,
  },
  {
    name: "Big Carrot",
    price: 160.0,
    type: "Rabbit",
    sold: 0,
    saleRate: 3,
  },
  {
    name: "Raw Chicken",
    price: 567.0,
    type: "Crocodile",
    sold: 0,
    saleRate: 4,
  },
  {
    name: "Green Broccoli",
    price: 35.0,
    type: "Parrot",
    sold: 0,
    saleRate: 2,
  },
  {
    name: "Block of Hay",
    price: 345.0,
    type: "Cow",
    sold: 0,
    saleRate: 1,
  },
  {
    name: "Fresh Grass",
    price: 515.0,
    type: "Cow",
    sold: 0,
    saleRate: 1,
  },
];

const EcommerceGame = () => {
  const [currentGameState, setCurrentGameState] = useState("initial");
  const [productChoices, setProductChoices] = useState([]);
  const [marketItems, setMarketItems] = useState([]);
  const [remainingItems, setRemainingItems] = useState([]);

  const [sales, setSales] = useState([]);

  useEffect(() => {
    initializeProducts();
  }, []);

  const changeGameState = (gameState) => {
    setCurrentGameState(gameState);
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const initializeProducts = () => {
    const shuffledList = shuffleArray([...productList]);

    const selectedItems = shuffledList.splice(0, 3);
    const onMarketItems = shuffledList.splice(0, 3);
    const remainingItems = shuffledList;

    setProductChoices(selectedItems);
    setMarketItems(onMarketItems);
    setRemainingItems(remainingItems);
  };

  // Start a new sale
  const startSale = () => {
    const intervalId = setInterval(() => {
      setMarketItems((prevMarketList) => {
        return prevMarketList.map((product) => ({
          ...product,
          sold: product.sold + product.saleRate,
        }));
      });
    }, 200);

    setTimeout(() => {
      clearInterval(intervalId);
      endSale();
    }, 5000);
  };

  const endSale = () => {
    changeGameState("sale-result");
  };

  return (
    <div className="">
      {currentGameState === "initial" && (
        <InitialPage changeGameState={changeGameState} />
      )}

      {currentGameState === "market-place" && (
        <MarketPlacePage
          productChoices={productChoices}
          marketItems={marketItems}
          startSale={startSale}
          changeGameState={changeGameState}
        />
      )}

      {currentGameState === "sale-result" && <SaleResultPage />}
    </div>
  );
};

export default EcommerceGame;
