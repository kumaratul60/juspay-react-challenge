import React from "react";

import Card from "./Card";
import Icon from "./Icon";

export default function Sidebar({ handleClick }) {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {/* Events */}

      <div className="font-bold"> {"Events"} </div>
      <Card
        handleClick={handleClick}
        id="start"
        className={
          "flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        }
      >
        {" "}
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </Card>
      <Card
        handleClick={handleClick}
        id="sprite_start"
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </Card>

      {/* Motion */}

      <div className="font-bold"> {"Motion"} </div>
      <Card
        handleClick={handleClick}
        id="move_10"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Move 10 steps"}
      </Card>

      <Card
        handleClick={handleClick}
        id="turn_15"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2 my-1" />
        {"15 degrees"}
      </Card>

      <Card
        handleClick={handleClick}
        id="turn_neg_15"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2 my-1" />
        {"-15 degrees"}
      </Card>

      {/* Looks */}

      <div className="font-bold"> {"Looks"} </div>
      <Card
        handleClick={handleClick}
        id="say_hello"
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Say Hello "}
      </Card>
      <Card
        handleClick={handleClick}
        id="change_size_10"
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Change size by "}
        <Icon name="undo" size={15} className="text-white mx-2 my-1" />
        {"10 %"}
      </Card>
      <Card
        handleClick={handleClick}
        id="show"
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Show "}
      </Card>
      <Card
        handleClick={handleClick}
        id="hide"
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Hide"}
      </Card>

      {/* Control */}

      <div className="font-bold"> {"Control"} </div>
      <Card
        handleClick={handleClick}
        id="wait_10_sec"
        className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Wait 10 seconds"}
      </Card>
      <Card
        handleClick={handleClick}
        id="repeat_10"
        className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Repeat"}
        <Icon name="redo" size={15} className="text-white mx-2 my-1" />
        {"10 times "}
      </Card>
      <Card
        handleClick={handleClick}
        id="repeat_forever"
        className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Repeat "}
        <Icon name="redo" size={15} className="text-white mx-2 my-1" />
        {"Forever"}
      </Card>
    </div>
  );
}
