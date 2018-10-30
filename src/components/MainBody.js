import React from 'react';
import Books from './Books'
import Image from './Image'
const MainBody = ({ onWrongAnswer,
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
  export default MainBody;