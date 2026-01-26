// import React from 'react'
import Toggle from "../Shared/Toggle";

const SavedCards = () => {
  const handlePowerToggle = (state: boolean) => {
    console.log("Power state:", state);
    // you can add your logic here
  };

  return (
    <div className="bg-amber-400 h-full">
      SavedCards
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Toggle Demo</h1>
        <Toggle onToggle={handlePowerToggle} />
      </div>
      <Toggle/>
    </div>
  );
};

export default SavedCards;
