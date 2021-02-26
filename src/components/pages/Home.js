import React, { useEffect, useState } from "react";
import CardItem from "../cards/CardItem";
import SearchBar from "../search/SearchBar";
import SortBar from "../sort/SortBar";

import { Row, Col, Button } from "antd";

function Home() {
  const [dataCard, setDataCard] = useState([]);
  const [card, setCard] = useState([]);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(12);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898"
      )
        .then((respone) => respone.json())
        .then((items) =>
          items.results.map((item, index) => ({
            name: item.name,
            id: index + 1,
          }))
        );
      const arr = data.map((item) => item.id).sort((a, b) => a - b);
      setDataCard(arr);
      setData(data);
    }

    async function DefaultCards() {
      const promises = [];
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      arr.map((item) =>
        promises.push(fetchCard(`https://pokeapi.co/api/v2/pokemon/${item}`))
      );

      const card = await Promise.all(promises).then((value) =>
        value.map((item) => ({
          id: item.id,
          name: item.name,
          src: item.img,
          types: item.types,
        }))
      );
      setCard(card);
    }
    DefaultCards();
    fetchData();
  }, []);

  async function fetchCard(url) {
    const card = await fetch(url)
      .then((respone) => respone.json())
      .then((item) => ({
        id: item.id,
        name: item.name,
        img: item.sprites.other["official-artwork"].front_default,
        types: item.types.map((item) => item.type.name),
      }))
      .catch();
    return card;
  }

  async function Cards(arr, index) {
    const promises = [];
    arr
      .slice(0, index)
      .map((item) =>
        promises.push(fetchCard(`https://pokeapi.co/api/v2/pokemon/${item}`))
      );

    const card = await Promise.all(promises).then((value) =>
      value.map((item) => ({
        id: item.id,
        name: item.name,
        src: item.img,
        types: item.types,
      }))
    );
    setCard(card);
  }

  function onReceiveSort(value) {
    let arr;
    if (value === "lowest_number") {
      arr = data.map((item) => item.id).sort((a, b) => a - b);
    } else if (value === "highest_number") {
      arr = data.map((item) => item.id).sort((a, b) => b - a);
    } else if (value === "a_z") {
      arr = data.map((item) => item.name).sort();
    } else if (value === "z_a") {
      arr = data
        .map((item) => item.name)
        .sort()
        .reverse();
    } else {
      return;
    }
    setIndex(12);
    setDataCard(arr);
    Cards(arr, 12);
  }
  async function onReceiveSearch(value) {
    if (value === "") return

    const card = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((respone) => respone.json())
      .then((item) => ({
        id: item.id,
        name: item.name,
        src: item.sprites.other["official-artwork"].front_default,
        types: item.types.map((item) => item.type.name),
      }))
      .catch();
    card !== undefined && setCard([card]);
  }
  const onClick = () => {
    const i = index + 12;
    Cards(dataCard, i);
    setIndex(i);
  };

  const elementCard = card.map((item) => (
    <Col key={item.id} xs={24} sm={6}>
      <CardItem
        number={item.id}
        name={item.name}
        src={item.src}
        types={item.types}
      ></CardItem>
    </Col>
  ));
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12}>
          <SearchBar onReceive={onReceiveSearch}></SearchBar>
        </Col>
        <Col xs={24} sm={12}>
          <SortBar onReceive={onReceiveSort}></SortBar>
        </Col>
        {elementCard}
        <Col xs={24} sm={24} style={{ textAlign: "center" }}>
          <Button onClick={onClick}>Show more</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
