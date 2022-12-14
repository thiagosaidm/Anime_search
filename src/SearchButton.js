import React from  'react';

const SearchButton = () =>{
    function clicouBotao(event) {
        console.log('bot')
    }
    return (
        <button onClick={clicouBotao}>Clique</button>
    )
}

export default SearchButton;