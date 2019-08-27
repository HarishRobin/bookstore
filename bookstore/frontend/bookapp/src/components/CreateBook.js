import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateBook extends Component {
    constructor() {
        super();
        this.state = {
            title:'',
            isbn:'',
            author:'',
            description:'',
            published_date:'',
            publisher:''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            description: this.state.description,
            published_date: this.state.published_date,
            publisher: this.state.publisher
        };

        axios.post('http://localhost:8082/api/books', data)
        .then(res => {
            this.setState({
                title:'',
                isbn:'',
                author:'',
                description:'',
                published_date:'',
                publisher:''
            })
            this.props.history.push('/');
        })
        .catch(err => {
            console.log("Error in CreateBook!..");
        })
    };

    render() {
        return(
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <Link to='/' className="btn btn-outline-warning float-left">
                                Show Book List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Book</h1>
                            <p className="lead text-center">
                                Create New Book
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input type='text' placeholder='Book Title' name='bookTitle' className='form-control' value={this.state.title} onChange={this.onChange}/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <input type='text' placeholder='ISBN' name='bookISBN' className='form-control' value={this.state.isbn} onChange={this.onChange}/>
                                </div>
                                <br/>
                                
                                <div className='form-group'>
                                    <input type='text' placeholder='Author' name='bookAuthor' className='form-control' value={this.state.author} onChange={this.onChange}/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <input type='textarea' placeholder='Describe the Book' name='bookDesc' className='form-control' value={this.state.description} onChange={this.onChange}/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <input type='date' placeholder='Date of Publish' name='bookPublishDate' className='form-control' value={this.state.published_date} onChange={this.onChange}/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <input type='text' placeholder='Published by' name='bookPublisher' className='form-control' value={this.state.publisher} onChange={this.onChange}/>
                                </div>
                                <br/>

                                <input type='submit' className="btn btn-outline-warning btn-block mt-4"/>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBook;