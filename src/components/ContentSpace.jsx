import React from "react";
import Header from "./chat/Header";

function ContentSpace() {
  return (
    <>
      <div class="bg-zinc-50 dark:bg-zinc-800 flex flex-col w-full ">
        <Header/>
        <div class="flex-1 overflow-y-auto">
          <div class="flex justify-start px-4 py-2">
            <div class="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
              <p class="text-sm text-zinc-600 dark:text-zinc-400">Hey there!</p>
            </div>
          </div>
          <div class="flex justify-start px-4 py-2">
            <div class="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
              <p class="text-sm text-zinc-600 dark:text-zinc-400">Hey there!</p>
            </div>
          </div>
          <div class="flex justify-end px-4 py-2">
            <div class="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                Hi! How can I help you?
              </p>
            </div>
          </div>
          <div class="flex justify-start px-4 py-2">
            <div class="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
              <p class="text-sm text-zinc-600 dark:text-zinc-400">Hey there!</p>
            </div>
          </div>
        </div>
        <form class="p-4 flex items-center border-t border-zinc-200 dark:border-zinc-700">
          <input
            type="text"
            placeholder="Type a message..."
            class="flex-1 p-2 rounded-l-lg border border-zinc-200 dark:border-zinc-700 focus:outline-none"
          />
          <button
            type="submit"
            class="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContentSpace;
