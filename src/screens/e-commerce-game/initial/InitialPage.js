const InitialPage = (props) => {
  const { changeGameState } = props;
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="text-[60px] text-blue-800 select-none">SaleQuest</div>
      <div className="text-[16px] text-blue-800 select-none mb-6">
        A quick 5 minutes mini game. Let's Play!
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-800 h-[40px] p-2 pl-[20px] pr-[20px] text-white font-bold rounded-md"
        onClick={() => changeGameState("market-place")}
      >
        PLAY
      </button>
    </div>
  );
};

export default InitialPage;
