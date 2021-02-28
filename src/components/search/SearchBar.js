import React, { useState, useEffect } from "react";
import { Select, Button, Tooltip, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchBar.css";
import * as HomeActions from "../../actions/HomeActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function SearchBar(props) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const { actions } = props;

  useEffect(() => {
    const fetchOptions = async () => {
      const respone = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898"
      );
      const data = await respone.json();
      setOptions(
        data.results.map(({ name }) => ({
          value: name,
          label: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
        }))
      );
    };

    fetchOptions();
  }, []);

  async function onSearch(params) {
    if (params === "") {
      return;
    }
    setValue(params);
  }

  function handleChange(params) {
    setValue(params);
  }

  const onClickSearch = () => {
    actions.search(value);
  };

  return (
    <div>
      <Row>
        <Col span={22}>
          <Select
            className="input-search"
            suffixIcon={false}
            showSearch
            placeholder="Search pokemon..."
            filterOption={true}
            onSearch={onSearch}
            onChange={handleChange}
            options={options}
          />
        </Col>
        <Col span={2} className="button-search">
          <Tooltip title="search">
            <Button
              type="primary"
              shape="circle"
              icon={<SearchOutlined />}
              onClick={onClickSearch}
            />
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(SearchBar);
