import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const Books = ({
    authorData,
    onWrongAnswer,
    onRightAnswer,
    bookStyle,
    selectedBook,
    showContinueButton,
    onContinue }) => {
    return <div className='books'>
      {
        authorData.bookOptions.map(
          (bookOption, index) => <Book
            onWrongAnswer={onWrongAnswer}
            onRightAnswer={onRightAnswer}
            bookStyle={bookStyle}
            selectedBook={selectedBook}
            key={index}
            title={bookOption} authorData={authorData} />
        )
      }
      {
        showContinueButton && <button onClick={onContinue} className='continue-button'>Continue</button>
      }
    </div>
  }
  Books.propTypes = {
    authorData: PropTypes.shape({
      bookOptions: PropTypes.arrayOf(PropTypes.string),
      authoredBook: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      authorName: PropTypes.string
    })
  }
  export default Books;