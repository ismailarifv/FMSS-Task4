import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


import EmojiResults from "../EmojiResults";
import SearchInput from "../SearchInput";
import filterEmoji from "../filterEmoji";

// Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun
// şekilde yeniden render edildiğini kontrol edecek olan test kodu.
test("filters the emoji list based on search input", () => {
    //search ınput ve emoji result render edilir
    const { getByPlaceholderText, getByTestId, rerender } = render(
      <div>
        <SearchInput textChange={() => {}} />
        <EmojiResults emojiData={[]} />
      </div>
    );
    //placeholderda search emoji yazan input search ınputa atanır
    const searchInputs = getByPlaceholderText(/Search Emoji/i);
    //inputun içi leg olarak değiştirilir ve filteredemojide tutulur.
    fireEvent.change(searchInputs, { target: { value: "Leg" } });
    const filteredEmoji = filterEmoji("Leg", 10);
    //ve tekrar rerender edilir
    rerender(
      <div>
        <SearchInput textChange={() => {}} />
        <EmojiResults emojiData={filteredEmoji} />
      </div>
    );
  
    const emoji = getByTestId("emoji-list").querySelectorAll(
      '[data-testid="emoji-row"]'
    );
    //index'ine göre bulunup bulunmadığı kontrol edilir.
    expect(emoji.length).toBe(filteredEmoji.length);
    emoji.forEach((emoji, index) => {
      const emojiData = filteredEmoji[index];
      expect(emoji.querySelector(".title").textContent).toBe(emojiData.title);
      expect(emoji.querySelector("img").getAttribute("alt")).toBe(
        emojiData.title
      );
    });
  });