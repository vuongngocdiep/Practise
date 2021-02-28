import React from "react";
import "./SortBar.css";
import { Select } from "antd";
import * as HomeActions from "../../actions/HomeActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { Option } = Select;

function SortBar(props) {
  const { data, actions } = props;
  const handleChange = (value) => {
    if (value === "lowest_number") {
      actions.sort(data.map((item) => item.id).sort((a, b) => a - b));
    } else if (value === "highest_number") {
      actions.sort(data.map((item) => item.id).sort((a, b) => b - a));
    } else if (value === "a_z") {
      actions.sort(data.map((item) => item.name).sort());
    } else if (value === "z_a") {
      actions.sort(
        data
          .map((item) => item.name)
          .sort()
          .reverse()
      );
    } else {
      return;
    }
  };
  return (
    <div>
      <Select
        className="select-sort"
        defaultValue="none"
        onChange={handleChange}
      >
        <Option value="none">Sort results by...</Option>
        <Option value="lowest_number">Lowest Number (First)</Option>
        <Option value="highest_number">Highest Number (First)</Option>
        <Option value="a_z">A-Z</Option>
        <Option value="z_a">Z-A</Option>
      </Select>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(SortBar);
