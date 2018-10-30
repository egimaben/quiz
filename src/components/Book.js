import React from 'react'
import PropTypes from 'prop-types';

const Book = ({ selectedBook, title, bookStyle, authorData, onRightAnswer, onWrongAnswer }) => {
    const style = selectedBook === title ? bookStyle : 'book';
    return <div className={style} onClick={() =>
        title === authorData.authoredBook ? onRightAnswer(title, authorData) : onWrongAnswer(title, authorData)
    }>{title}</div>
}
Book.propTypes = {
    title: PropTypes.string.isRequired
}
export default Book;