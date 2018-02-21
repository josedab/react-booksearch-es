import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  SingleRange,
  ResultCard
} from '@appbaseio/reactivesearch';
class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
      >
        <DataSearch
          componentId="mainSearch"
          dataField={["original_title", "original_title.search", "authors", "authors.search"]}
          queryFormat="and"
          iconPosition="left"
        />
        <SingleRange
          componentId="ratingsFilter"
          dataField="average_rating_rounded"
          title="Book Ratings"
          data={[
            { start: 4, end: 5, label: "★★★★ & up" },
            { start: 3, end: 5, label: "★★★ & up" },
            { start: 2, end: 5, label: "★★ & up" },
            { start: 1, end: 5, label: "★ & up" },
          ]}
          react={{
            and: "mainSearch"
          }}
        />
        <ResultCard
          componentId="results"
          dataField="original_title"
          react={{
            "and": ["mainSearch", "ratingsFilter"]
          }}
          onData={(res)=>({
            "image": res.image,
            "title": res.original_title,
            "description":  res.average_rating + " ★ "
          })}
        />
      </ReactiveBase>
    );
  }
}
export default App;
