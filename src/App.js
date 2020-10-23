import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FormSection from "./components/FormSection";
import Books from "./components/Books";
import TitleSection from "./components/TitleSection";
import Loader from "./components/Loader";
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);

  const url = `https://www.googleapis.com/books/v1/volumes`;

  const max = 40

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    setError(false);
    try {
      const res = await axios.get(`${url}?q=${query}&maxResults=${max}`);
      setBooks(res.data)
    } catch (error) {
      setError(true);
    }
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    fetchBooks();
  };


  return (
    <>
      <TitleSection />
      <FormSection
        onSubmit={onSubmit}
        onChange={onChange}
        query={query}
        error={error}
      />

      <InfiniteScroll
        dataLength={books.items.length}
        next={fetchBooks}
        hasMore={true}
        loader={<Loader />}
      >
        <Books books={books} />
      </InfiniteScroll>
    </>
  );
};

export default App
