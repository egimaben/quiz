import React, { Component } from 'react';
import { MainBody, Header, Footer } from './quizComponents';
import './App.css';
import { data } from './data';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import AuthorForm from './AuthorForm';
class App extends Component {
  state = {
    userPassed: false,
    gameStarting: true,
    currentAuthorData: {},
    bookStyle: 'book',
    selectedBook: '',
    index: 0
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
    this.setState((prevState) => {
      return {
        userPassed: false,
        gameStarting: false,
        currentAuthorData: {},
        selectedBook: '',
        bookStyle: 'book',
        index: prevState.index + 1
      }
    });
  }
  render() {
    const { bookStyle, selectedBook, userPassed, gameStarting, currentAuthorData, index } = this.state;
    let authorData = {};
    let showContinueButton = false;
    //at beginning of game
    if (!userPassed && gameStarting && this.objectIsEmpty(currentAuthorData)) {
      authorData = data[index % data.length];
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
      authorData = data[index % data.length];
    }
    const MainBodyWrapper = () => {
      return <MainBody onWrongAnswer={this.onWrongAnswer}
        onRightAnswer={this.onRightAnswer}
        bookStyle={bookStyle}
        selectedBook={selectedBook}
        showContinueButton={showContinueButton}
        onContinue={this.onContinue}
        selectBook={this.selectBook}
        authorData={authorData} />
    };
    const AuthorFormWrapper = withRouter(({ history }) =>
      <AuthorForm onSubmit={(author) => {
        data.push(author)
        history.push('/');
      }}
      />
    );
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className='container'>
            <Header />
            <Route exact path="/" component={MainBodyWrapper} />
            <Route path="/add" component={AuthorFormWrapper} />
            <Footer />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
