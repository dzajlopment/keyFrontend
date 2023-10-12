import { Command } from "cmdk";
import { useState } from "react";

const CustomCombobox = ({ items }: { items: JSX.Element[] }) => {

  return (
    <Command>
      <div cmdk-input-wrapper="">
        <Command.Input className="w-full p-2 border-2 border-gray-300 rounded-md mb-3" placeholder="Wybierz nauczyciela..." autoFocus />
      </div>
      <Command.List className="h-[6rem] overflow-x-auto">
        { items }
      </Command.List>
    </Command>
  )
}

export default CustomCombobox;