import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import BookList from '../../components/bookList/BookList';
import classes from "./MainPage.module.css";

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState('');

    const handleAddBook = () => {
        if (newBook) {
            setBooks([...books, newBook]);
            setNewBook('');
        }
    };

    const handleDeleteBook = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };

    return (
        <div className={classes.wrapper}>
            <svg width="156" height="107" viewBox="0 0 156 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M149 -25.5818C181.5 12.8363 91.7285 107 36.5 107C-18.7285 107 -88 49.2285 -88 -6C-88 -61.2285 -43.2285 -106 12 -106C67.2285 -106 177 -84.1637 149 -25.5818Z" fill="#1D2CF3" />
            </svg>
            <h1 className={classes.word}>Добавить книгу</h1>
            <Input
                value={newBook}
                onChange={(e) => setNewBook(e.target.value)}
                placeholder="Введите название"
            />
            <Button label="Добавить" onClick={handleAddBook} />
            <BookList books={books} onDelete={handleDeleteBook} />
        </div>
    );
};

export default MainPage;