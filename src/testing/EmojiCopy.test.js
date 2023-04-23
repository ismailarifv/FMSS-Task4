import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Emoji kopyalama testit',()=>{
    let emojiCopy;
    //App dosyası render edilir ve title ı joy olan emoji emojiCopy değişkenine gönderilir.
    beforeEach(()=>{
        render(<App/>)
        emojiCopy = screen.getByText('Joy');
    })

    test('Emoji kopyalandı mı',()=>{
        // emojiye tıklanır.
        fireEvent.click(emojiCopy);
        // data-clipboard-text'te 😂 bu değer var mı diye kontrol eder.
        expect(emojiCopy.parentElement.getAttribute('data-clipboard-text')).toMatch('😂')
    })
})