import React from 'react';
import classes from "./BookList.module.css";

const BookList = ({ books, onDelete }) => {
    return (
        <div className={classes.book}>
            <div className={classes.bookList}>
                <h3 className={classes.bookWord}>Название</h3>
                <ul>
                    {books.map((book, index) => (
                        <li key={index} className={classes.books}>
                            {book}
                            <div className={classes.deleteBlock}>
                                <button className={classes.delete} onClick={() => onDelete(index)}>Удалить</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookList;