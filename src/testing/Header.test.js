import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../Header'

//Başlık kısmının başarılı bir şekilde render edildiğini gösteren ve Emoji Search yazısının sayfada 
//bulunup bulunmadğını gösteren test kodu
describe('Header render',() =>{
    let emojiHeader;
    beforeEach(() => {
        //Header render edilir
        render(<Header/>)
        //emoji search yazısı bulunup bir değişkene atanır.
        emojiHeader = screen.getByText('Emoji Search');
    })
    test('baslik kontrolu',()=>{
        //emoji search yazısının sayfada bulunup bulnmadığı kontrol edilir.
        expect(emojiHeader).toBeInTheDocument();
    })
})