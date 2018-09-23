import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './components/BlogList'
import Axios from 'axios'
import SearchBox from './components/SearchBox'


const link = 'https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json'
// import articles from './example-data.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state  = {
      sample:[],
      loading:true,
      searchKey:''
    }
    this.doSearch = this.doSearch.bind(this)
  }

  componentDidMount(){

    // fetch("https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json")
    // .then((data) => data.json())
    // .then((data) => {
    //   console.log(this.state)
    //   this.setState({
    //     sample: data,
    //     testing:false
    //   })

    //   console.log(this.state)
    // })
    Axios.get(link).then(({data,status}) => {
      if(status === 200){
        this.setState({
          sample: data,
          loading: false
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  doSearch(event){
    console.log(event.target.value)
    this.setState({
      searchKey: event.target.value
    })
  }

  render() {
    const ComponentLoading = <h1>Loading ...</h1>
    const FilteredArticles = this.state.sample.filter(article => (
      article.title.toLocaleLowerCase().includes(this.state.searchKey.toLocaleLowerCase())
    ))
    const Articles = FilteredArticles.map((article,index) => 
      <BlogList blogs = {article} key={index}/>
    )
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Bro</h1>
        </header> */}
        <h1>{this.state.searchKey}</h1>
        <div className="App">
            <SearchBox onSearch={this.doSearch}/>
            {this.state.loading? ComponentLoading: Articles}
        </div>
      </div>
    );
  }
}

export default App;
