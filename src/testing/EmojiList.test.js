import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import EmojiResults from '../EmojiResults'

//Uygulama ilk açıldığında emoji listesinin başarılı 
//bir şekilde render edildiğini kontrol edecek olan test kodu.
    test("Emoji List render", () => {
        const emojiInfo = [
            { title: "Joy", symbol: "😂" },
            { title: "Smiley", symbol: "😃" },
            { title: "Smile", symbol: "😄" },
          ];
          //emojiData'daki objelerin varlığı render ediliyor.
        render(<EmojiResults emojiData={emojiInfo} data-testid="emoji-list" />);
        // test ıd'si emoji-list olan var mı yok mu diye kontrol ediliyor.
        const emojiList = screen.getByTestId("emoji-list");
        expect(emojiList).toBeInTheDocument();
      });


