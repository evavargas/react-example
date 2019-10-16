import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
    promesa.then(resp=>resp.json()).then(data=>{
      this.setState({
        articles: data
      })
    })
  }
  render() {
    return (
      <div className="quote">
      {this.state.articles.map((article)=>{
        return <p  style={{backgroundColor: 'rgb(194, 230, 247)'}}>{article.title}</p>
      })}

      </div>
    );
  }
}
render(<Blog />, document.getElementById('root'));
