// import React from 'react'

const TotalComponent = () => {
  return (
    <div className="w-full basis-1/4 flex flex-col py-5 px-2 border border-gray-300 shadow">
      <form>
        <div className="flex justify-between">
            <h1 className="font-bold">Subtotal</h1>
            <h1 className="font-bold">$200.00</h1>
        </div>
      </form>
    </div>
  );
};

export default TotalComponent;
