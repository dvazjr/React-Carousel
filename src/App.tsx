import { useState } from "react";
import "./App.css";

const cena1 = "https://media.giphy.com/media/12XNRtl6kZxQVq/giphy.gif";
const cena2 = "https://media.giphy.com/media/l0HU20BZ6LbSEITza/giphy.gif";
const cena3 = "https://media.giphy.com/media/2isncUhJYr8vkMBkjy/giphy.gif";
const cena4 = "https://media.giphy.com/media/Ym3AjvQQf4AfNZbvri/giphy.gif";
const cena5 = "https://media.giphy.com/media/Vzku9jyuef09G/giphy.gif";
const images = [
  {
    title: "Cena 1",
    image: "https://media.giphy.com/media/12XNRtl6kZxQVq/giphy.gif",
    description: "this is the first image",
  },
  {
    title: "Cena 2",
    image: "https://media.giphy.com/media/l0HU20BZ6LbSEITza/giphy.gif",
    description: "this is the second image",
  },
  {
    title: "Cena 3",
    image: "https://media.giphy.com/media/2isncUhJYr8vkMBkjy/giphy.gif",
    description: "this is the third image",
  },
  {
    title: "Cena 4",
    image: "https://media.giphy.com/media/Ym3AjvQQf4AfNZbvri/giphy.gif",
    description: "this is the fourth image",
  },
  {
    title: "Cena 5",
    image: "https://media.giphy.com/media/Vzku9jyuef09G/giphy.gif",
    description: "this is the fifth image",
  },
];

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentImage = images[slideIndex];
  return (
    <>
      <div className="carousel">
        <div className="image-container">
          <img src={currentImage.image} alt="" />
          <h3>{currentImage.title}</h3>
          <p>{currentImage.description}</p>
        </div>
      </div>
      <div className="controls">
      <button onClick={() => {
        if(slideIndex > 0) {
          setSlideIndex(slideIndex - 1)
        }          
        }}>Previous</button>
        <button
          onClick={() => {
            if(slideIndex < images.length - 1) {
              setSlideIndex(slideIndex + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
