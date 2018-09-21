import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class PageF extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PageF</h1>
        </header>
				<div><a href="/index.html">to home</a></div>
				<div><a href="/sub2.html">to pageS</a></div>
				<div><a href="./sub1/page0.html">to page0</a></div>
				<div><a href="./sub1/page1.html">to page1</a></div>
      </div>
    );
  }
}

ReactDOM.render(<PageF />, document.getElementById('root'));
