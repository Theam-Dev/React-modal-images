import './App.css';
import { RModalImages } from 'react-modal-images';
import React from 'react';


function App() {

  return (
    <div className="App">
      <h2>React modal images</h2>
       <RModalImages
        small={"https://dummyimage.com/400x200/914a91/fff"}
        medium={"https://dummyimage.com/600x400/914a91/fff"}
        large={"https://dummyimage.com/800x600/914a91/fff"}
        alt={"react using react modal images"}
      />
    </div>
  );
}
export default App;