import React, { Component } from 'react';
// import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

export default class MainSearch extends Component {
  render() {
    return (
      <div className="mainSearch">
        <Search
          placeholder="검색어를 입력하세요"
          enterButton
          size="large"
          className="mainSearch_search"
        />
      </div>
    );
  }
}
