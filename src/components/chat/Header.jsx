import React from "react";

function Header() {
  return (
    <div class="bg-white dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
      <div class="flex items-center">
        <img
          src="https://placehold.co/40x40"
          alt="User Avatar"
          class="w-10 h-10 rounded-full mr-2"
          crossorigin="anonymous"
        />
        <div>
          <p class="font-semibold">John Doe</p>
          <p class="text-xs text-green-500 dark:text-green-400">Online</p>
        </div>
      </div>
      <div className="rounded-full w-10 h-10 border border-zinc-200 bg-slate-50 flex justify-center items-center">
      <i class="fa-solid fa-ellipsis text-xl"></i>
      </div>
    </div>
  );
}

export default Header;
