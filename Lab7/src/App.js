import { useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
import Image from "./components/image";
import GoodsCard from "./components/goodsCard";

function App() {
  const [click9, setClick9] = useState(0);
  const [click10, setClick10] = useState(0);

  const getColorState = (counter) => {
    const state = counter % 3;
    if (state === 1) return { backgroundColor: "yellow", color: "red" };
    if (state === 2) return { backgroundColor: "blue", color: "white" };
    return { backgroundColor: "white", color: "black" };
  };

  const [imgVisible, setImgVisible] = useState(true);
  const [imgWidth, setImgWidth] = useState(400);

  const addImage = () => setImgVisible(true);
  const increaseImage = () => setImgWidth(imgWidth + 50);
  const decreaseImage = () => { if(imgWidth>50) setImgWidth(imgWidth-50); };
  const removeImage = () => setImgVisible(false);

  const goods = [
    { id: 1, image: "/t1.jpg", title: "Навушники", price: 1500 },
    { id: 2, image: "/t2.jpg", title: "Годинник", price: 3200 },
    { id: 3, image: "/t3.jpg", title: "Ноутбук", price: 28000 },
    { id: 4, image: "/t4.jpg", title: "Телефон", price: 19000 },
    { id: 5, image: "/t5.jpg", title: "Планшет", price: 8500 },
    { id: 6, image: "/t6.jpg", title: "Мікрофон", price: 2400 }
  ];

  return (
    <>
      <Header />
      <Content>

        <h2>Ткаченко Євген Костянтинович</h2>
        <p>Дата народження: 09.05.2006. Місце народження: Київ</p>

        <p>
          Освіта:
          <br />НВК №167 з поглибленним вивченням української мови, Київ.
          <br />Навчаюсь у КПІ, спеціальність 126.
        </p>

        <h3>Мої хобі:</h3>
        <ul>
          <li>Волейбол</li>
          <li>Організація музикальних концертів</li>
          <li
            style={getColorState(click9)}
            onClick={() => setClick9(click9 + 1)}
          >
            Створення пет-проєктів в якості проджект менеджера
          </li>
        </ul>

        <h3
          style={getColorState(click10)}
          onClick={() => setClick10(click10 + 1)}
        >
          Мої улюблені книги/фільми:
        </h3>

        <ol>
          <li>Чистий AGILE. Назад до основ</li>
          <li>Чорний телефон</li>
          <li>Першому гравцю приготуватись</li>
        </ol>

        <h3>Моє улюблене місто — Малага</h3>
        <p>Малага — чудове місто...</p>

        {imgVisible && (
          <Image src="/malaga.jpg" width={imgWidth} />
        )}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={addImage}>Додати</button>
          <button onClick={increaseImage}>Збільшити</button>
          <button onClick={decreaseImage}>Зменшити</button>
          <button onClick={removeImage}>Видалити</button>
        </div>

        <h2 style={{ textAlign: "center", marginTop: "40px" }}>Галерея товарів</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {goods.map(item => (
            <GoodsCard 
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>

      </Content>
    </>
  );
}

export default App;
