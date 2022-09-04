import React, { useState, useEffect } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ taskToRun, tasks }) {
  const [classes, setClasses] = useState("");
  useEffect(() => {
    if (taskToRun === "new_start" || taskToRun === "new_sprite_start") {
      for (let i = 0; i < tasks.length; i++) {
        if (`new_${tasks[i].name}` === "new_turn_15") {
          setClasses("transform rotate-45");
        }
        if (`new_${tasks[i].name}` === "new_turn_neg_15") {
          setClasses("transform -rotate-45");
        }
        if (`new_${tasks[i].name}` === "new_move_10") {
          setClasses("transform translate-x-16");
        }
        if (`new_${tasks[i].name}` === "new_change_size_10") {
          setClasses("transform scale-50");
        }
        if (`new_${tasks[i].name}` === "new_change_size_10") {
          setClasses("transform scale-50");
        }
        if (`new_${tasks[i].name}` === "new_show") {
          setClasses("");
        }
        if (`new_${tasks[i].name}` === "new_hide") {
          setClasses("hidden");
        }
      }
    } else {
      if (taskToRun === "new_turn_15") {
        setClasses("transform rotate-45");
      }
      if (taskToRun === "new_turn_neg_15") {
        setClasses("transform -rotate-45");
      }
      if (taskToRun === "new_move_10") {
        setClasses("transform translate-x-16");
      }
      if (taskToRun === "new_change_size_10") {
        setClasses("transform scale-50");
      }
      if (taskToRun === "new_change_size_10") {
        setClasses("transform scale-50");
      }
      if (taskToRun === "new_show") {
        setClasses("");
      }
      if (taskToRun === "new_hide") {
        setClasses("hidden");
      }
    }
  }, [taskToRun]);
  return (
    <div className="flex-none h-full w-full overflow-y-auto p-4">
      <div>
        {taskToRun === "new_say_hello" && <div>Hello</div>}
        <CatSprite classes={classes} />
      </div>
    </div>
  );
}
