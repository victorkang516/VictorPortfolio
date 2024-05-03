import animegirl from "./anime-girl1.png";

const InitialPage = (props) => {
  const { changeGameState } = props;
  return (
    <div className="flex flex-col mx-auto mt-32 lg:w-[80vw] w-[90vw] justify-center items-center">
      <div className="flex flex-row justify-start items-start w-full -mb-10">
        <div className="text-white text-[160px] font-bebas">MINI GAME</div>
      </div>

      <div className="flex flex-col justify-center lg:items-center items-start gap-2 bg-white rounded-lg p-10 relative lg:w-[80vw] w-[90vw] mb-6">
        <img src={animegirl} className="absolute bottom-0 -right-16"></img>

        <div className="text-[24px] text-black select-none">
          Hey! Want to Play a Mini Game?
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-800 w-[260px] h-[50px] p-2 pl-[20px] pr-[20px] text-white font-bold rounded-md"
          onClick={() => changeGameState("market-place")}
        >
          YES
        </button>
      </div>
    </div>
  );
};

export default InitialPage;
