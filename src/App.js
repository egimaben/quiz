import React, { Component } from 'react';
import {Header,Footer,Image,Books} from './quizComponents';
import './App.css';
import {data} from './data';

class App extends Component {
  state = {
    userPassed: false,
    gameStarting: true,
    currentAuthorData: {},
    bookStyle: 'book',
    selectedBook: '',
    index:0
  }

  objectIsEmpty = (obj) => {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  onWrongAnswer = (selectedBook, authorData) => {
    this.setState({
      userPassed: false,
      gameStarting: false,
      currentAuthorData: authorData,
      selectedBook: selectedBook,
      bookStyle: 'wrong-book'
    });
  }

  onRightAnswer = (selectedBook, authorData) => {
    this.setState({
      userPassed: true,
      gameStarting: false,
      currentAuthorData: authorData,
      selectedBook: selectedBook,
      bookStyle: 'right-book'
    });
  }
  onContinue = () => {
    this.setState((prevState)=>{
      return {
      userPassed: false,
      gameStarting: false,
      currentAuthorData: {},
      selectedBook: '',
      index:prevState.index+1
    }});
  }

  render() {
    const { bookStyle, selectedBook, userPassed, gameStarting, currentAuthorData,index } = this.state;
    let authorData = {};
    let showContinueButton = false;
    //at beginning of game
    if (!userPassed && gameStarting && this.objectIsEmpty(currentAuthorData)) {
      authorData = data[index%data.length];
    }
    //game on, and wrong selection
    else if (!userPassed && !gameStarting && !this.objectIsEmpty(currentAuthorData)) {
      authorData = currentAuthorData;
    }
    //game on, and right selection
    else if (userPassed && !gameStarting && !this.objectIsEmpty(currentAuthorData)) {
      showContinueButton = true;
      authorData = currentAuthorData;
    }
    //game on, got right answer, clicked continue
    else if (!userPassed && !gameStarting && this.objectIsEmpty(currentAuthorData)) {
      authorData = data[index%data.length];
    }
    return (
      <div className='container'>
        <Header />
        <div className='main'>
          <Image src={'./assets/' + authorData.avatar} />
          <Books onWrongAnswer={this.onWrongAnswer}
            onRightAnswer={this.onRightAnswer}
            bookStyle={bookStyle}
            selectedBook={selectedBook}
            showContinueButton={showContinueButton}
            onContinue={this.onContinue}
            selectBook={this.selectBook}
            authorData={authorData} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
