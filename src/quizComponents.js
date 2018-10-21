import React from 'react';
import PropTypes from 'prop-types';
export const Header = () => {
    return (
      <header className="header"><h2>Author Quiz</h2>Do you know your authors?</header>
    );
  }
  
  export const Image = ({ src }) => {
    return <img className={'author-img animated-div'} src={src} alt='author of shown books' />
  }
  
  export const Book = ({ selectedBook, title, bookStyle, authorData, onRightAnswer, onWrongAnswer }) => {
    const style = selectedBook === title ? bookStyle : 'book';
    return <div className={style} onClick={() => {
      title === authorData.authoredBook
        ?
        onRightAnswer(title, authorData)
        :
        onWrongAnswer(title, authorData);
    }
    }>{title}</div>
  }
  
  export const Books = ({
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
Books.propTypes={
  authorData:PropTypes.shape({
    bookOptions:PropTypes.arrayOf(PropTypes.string),
    authoredBook:PropTypes.string,
    avatar:PropTypes.string,
    authorName:PropTypes.string
  })
}
  
  export const Footer = () => {
    return <footer className='footer'>Copyright C</footer>
  }