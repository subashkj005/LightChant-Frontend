import React from "react";

function EmptySpace() {
  return (
    <div class="bg-zinc-50 dark:bg-zinc-800 flex flex-col w-full ">
      <div className="px-4 py-10 sm:px-6 lg:px-8 h-full w-full flex justify-center items-center bg-gray-200">
        <div className="text-center flex items-center flex-col">
          <h3 className="mt-2 text-2xl font-semibold ">
            Select a chat for a new conversation
          </h3>
        </div>
      </div>
    </div>
  );
}

export default EmptySpace;
