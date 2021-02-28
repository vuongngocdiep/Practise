import React, { useEffect, useState } from "react";
import CardItem from "../../components/cards/CardItem";
import SearchBar from "../../components/search/SearchBar";
import SortBar from "../../components/sort/SortBar";
import * as HomeActions from "../../actions/HomeActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Row, Col, Button } from "antd";

function Home(props) {
  const [data, setData] = useState([]);
  const { actions, state } = props;
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
      actions.change_items(data.map((item) => item.id));
      setData(data);
    }
    fetchData();
  }, [actions]);

  useEffect(() => {
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

    async function Cards() {
      const promises = [];
      state.items
        .slice(0, state.index)
        .map((item) =>
          promises.push(fetchCard(`https://pokeapi.co/api/v2/pokemon/${item}`))
        );
      const cards = await Promise.all(promises).then((value) =>
        value.map((item) => item)
      );
      actions.change_data(cards);
    }
    Cards();
  }, [state.items, state.index, actions]);

  const onClick = () => {
    actions.change_index(12);
  };

  const elementCard = state.data.map((item) => (
    <Col key={item.id} xs={24} sm={6}>
      <CardItem
        number={item.id}
        name={item.name}
        src={item.img}
        types={item.types}
      ></CardItem>
    </Col>
  ));
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12}>
          <SearchBar></SearchBar>
        </Col>
        <Col xs={24} sm={12}>
          <SortBar data={data}></SortBar>
        </Col>
        {elementCard}
        <Col xs={24} sm={24} style={{ textAlign: "center" }}>
          <Button onClick={onClick}>Show more</Button>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state.HomeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
