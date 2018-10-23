import React from 'react';
import { MiniDelete } from './quizComponents';
export default class AuthorForm extends React.Component {
    state = {
        authorName: '',
        bookOptions: [],
        authoredBook: '',
        avatar: '',
        booktmp: ''
    };
    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state);
    }
    addBook = () => {
        this.setState(({ bookOptions, booktmp }) => {
            bookOptions.push(booktmp);
            return {
                bookOptions: bookOptions,
                booktmp: ''
            }
        });
    }
    removeBook = (name) => {
        this.setState(({ bookOptions }) => {
            bookOptions.splice(bookOptions.indexOf(name), 1);
            return {
                bookOptions: bookOptions
            }
        });
    }

    render() {
        const { authorName, authoredBook, avatar, booktmp } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <br /><input type="text" value={authorName} name='authorName' onChange={this.handleChange} required />
                </label><br />
                <label>
                    Book:
            <br /><input type="text" value={authoredBook} name='authoredBook' onChange={this.handleChange} required />
                </label><br />
                <label>
                    Avatar:
            <br /><input type="text" value={avatar} name='avatar' onChange={this.handleChange} required />
                </label><br />
                <label>
                    Book Options:
            <br />
                    {
                        this.state.bookOptions.map((book,index) => <MiniDelete key={index} item={book} callback={this.removeBook} />)
                    }
                    <br /><input type="text" value={booktmp} name='booktmp' onChange={this.handleChange} />
                    <button className='add-button' type='button' onClick={this.addBook}>add</button>
                </label>
                <br /><input type="submit" value="Submit" />
            </form>
        );
    }
}