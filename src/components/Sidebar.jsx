import React from "react";

function Sidebar() {
  return (
    <>
      <div class="w-20 bg-zinc-100 dark:bg-zinc-800 flex flex-col items-center py-4">
        <button class="mb-4 bg-slate-50 hover:bg-slate-100 hover:shadow-md p-1 px-2 rounded-md">
          <i class="fa-solid fa-comment-dots text-2xl text-slate-500"></i>
        </button>
        <button class="mb-4 bg-slate-50 hover:bg-slate-100 hover:shadow-md p-1 px-2 rounded-md">
          <i class="fa-solid fa-user-group text-lg text-slate-500 "></i>
        </button>
        <button className="bg-slate-50 hover:bg-slate-100 hover:shadow-md p-1 px-2 rounded-md">
          <i class="fa-solid fa-right-from-bracket text-2xl text-slate-500"></i>
        </button>
      </div>
    </>
  );
}

export default Sidebar;
