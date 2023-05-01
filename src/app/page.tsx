"use client";

import { FormEvent, useState } from "react";

interface DoneDoFormInterface extends EventTarget {
  doneDo: HTMLInputElement;
}

interface doneDoItemInterface {
  time: Date;
  doneDo: string;
}

export default function DoneDo() {
  const [doneDoList, setDoneDoList] = useState<doneDoItemInterface[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { doneDo } = e.target as DoneDoFormInterface;

    // set Done Do List
    setDoneDoList([
      {
        time: new Date(),
        doneDo: doneDo.value,
      },
      ...doneDoList,
    ]);

    // reset input
    doneDo.value = "";
  };

  const timeFormatting = (time: Date): string => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <h1 className="text-9xl font-thin mb-5">Done Do</h1>
      <div className="mb-3">
        <form onSubmit={handleSubmit}>
          <input
            name="doneDo"
            className="w-full border-2 text-2xl text-right p-1"
            type="text"
            placeholder="Done Do"
          />
        </form>
      </div>
      <div className="box-content h-64 overscroll-auto">
        {doneDoList.length ? (
          <ul className="list-none list-inside">
            {doneDoList.map((item, index) => (
              <li
                key={index}
                className="text-2xl p-2 flex items-center justify-between"
              >
                <div className="text-xs">{timeFormatting(item.time)}</div>
                <div>{item.doneDo}</div>
                <div className="text-xs">
                  <button>X</button>
                  <button>E</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center items-center h-full">
            <h3 className="text-4xl font-thin">Empty</h3>
          </div>
        )}
      </div>
    </>
  );
}
