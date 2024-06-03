import React from "react";

function Users() {
  return ( 
    <>
      <div class="w-1/3 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-700 max-w-[23.2rem]">
        <div class="p-4 border-b border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
          <h2 class="text-xl font-bold">Messages</h2>
          <button className="bg-slate-50 hover:bg-slate-100 hover:shadow-md p-1 px-2 rounded-full">
          <i class="fa-solid fa-user-plus text-slate-500"></i>
          </button>
        </div>
        <div class="overflow-y-auto">
          <div class="flex items-center p-4 border-b border-zinc-200 dark:border-zinc-700">
            <img
              src="https://placehold.co/40x40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div class="flex-1">
              <div class="flex justify-between">
                <span class="font-semibold">Mark</span>
                <span class="text-sm text-zinc-500 dark:text-zinc-400">
                  11:11 PM
                </span>
              </div>
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                Let's create a group chat!
              </p>
            </div>
          </div>

          <div class="flex items-center p-4 border-b border-zinc-200 dark:border-zinc-700">
            <img
              src="https://placehold.co/40x40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div class="flex-1">
              <div class="flex justify-between">
                <span class="font-semibold">New Group</span>
                <span class="text-sm text-zinc-500 dark:text-zinc-400">
                  11:14 PM
                </span>
              </div>
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                Mobile as well!
              </p>
            </div>
          </div>
          <div class="flex items-center p-4 border-b border-zinc-200 dark:border-zinc-700">
            <img
              src="https://placehold.co/40x40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full mr-4"
            />
            <div class="flex-1">
              <div class="flex justify-between">
                <span class="font-semibold">Group Messages</span>
                <span class="text-sm text-zinc-500 dark:text-zinc-400">
                  11:06 PM
                </span>
              </div>
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                amazing, thank you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
