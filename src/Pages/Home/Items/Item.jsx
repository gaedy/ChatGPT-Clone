import React from "react";

function Item({ date, item }) {
  return (
    <div>
      <div className="text-xs ml-1 p-2 mt-5 sticky top-0 bg-ahBackColor2 w-full  ">
        {date}
      </div>

      <div>
        {item.map((everyItem, index) => (
          <>
            <div
              className="hover:bg-ahBackColor rounded-lg p-2 mx-1 mr-2
                 flex flex-col items-start font-light text-sm cursor-pointer truncate"
              key={index}
            >
              <p>{everyItem}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Item;
