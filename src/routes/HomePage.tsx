import React from "react";
import { useNavigate } from "react-router-dom";

import { MiscContextWrapper } from "../lib/contexts";

import Button from "../core/components/Button";
import InputWithButton from "../core/components/InputWithButton";

const HomePage = MiscContextWrapper(({ miscContext }) => {
  const navigate = useNavigate();

  const handleClick = (search: string) => {
    navigate("/books/global/?search=" + search);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-full gap-16">
      <img
        height={780}
        width={1040}
        src="illustration.png"
        alt="Man-Reading-Book-Illustration"
        className="w-auto h-auto opacity-50 absolute m-auto left-0 right-0"
      />
      <div className="z-10 flex flex-col items-center justify-center text-center w-full h-full gap-16">
        <div className="flex gap-6 flex-col z-10">
          <h1 className="text-orange-400 font-bold text-4xl md:text-6xl">
            Reading Made Easier
          </h1>
          <p className="font-light md:text-2xl text-xl">
            E-Reader is an online library and book reader where you can <br />{" "}
            read your own books or choose from our selection.
          </p>
        </div>
        <InputWithButton
          onClick={handleClick}
          placeholder="Book name"
          className="max-w-screen-sm"
        />
        <Button onclick={() => navigate("/books/global")}>Start Reading</Button>
      </div>
    </div>
  );
});

export default HomePage;
