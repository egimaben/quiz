import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const Header = () =>
  <header className="header">
    <h2>Author Quiz</h2>
    Do you know your authors?
     <p><Link to="/add">Add your own?</Link></p>
  </header>
export const Image = ({ src }) => {
  return <img className={'author-img'} src={src} alt='author of shown books' />
}
export const Book = ({ selectedBook, title, bookStyle, authorData, onRightAnswer, onWrongAnswer }) => {
  const style = selectedBook === title ? bookStyle : 'book';
  return <div className={style} onClick={() =>
    title === authorData.authoredBook ? onRightAnswer(title, authorData) : onWrongAnswer(title, authorData)
  }>{title}</div>
}
export class MiniDelete extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { callback, item } = this.props;
    callback(item);
  }
  render() {
    return (<React.Fragment><button onClick={this.handleClick}>x</button><div>{this.props.item}</div></React.Fragment>);
  }
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
export const Footer = () => {
  return <footer className='footer'>Copyright C</footer>
}
export const MainBody = ({ onWrongAnswer,
  onRightAnswer,
  bookStyle,
  selectedBook,
  showContinueButton,
  onContinue,
  selectBook,
  authorData }) => {
  return <div className='main'>
    <Image src={'./assets/' + authorData.avatar} />
    <Books onWrongAnswer={onWrongAnswer}
      onRightAnswer={onRightAnswer}
      bookStyle={bookStyle}
      selectedBook={selectedBook}
      showContinueButton={showContinueButton}
      onContinue={onContinue}
      selectBook={selectBook}
      authorData={authorData} />
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
Book.propTypes = {
  title: PropTypes.string.isRequired
}
Image.propTypes = {
  src: PropTypes.string.isRequired
}