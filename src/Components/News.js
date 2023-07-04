import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    setProgress:()=>{}
}
static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress:PropTypes.func
}
constructor(props){
        super(props)
        this.state={
           articles: [],
           loading:false, 
           page:1,
           totalResults:0,
           progress:0
        }
    }
    capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
async updatenews(){
         console.log(this.props.category)
        this.props.setProgress(20)
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a06d5d684514e1cbad640667f422c58&pageSize=${this.props.pageSize}&page=${this.state.page}`
        this.setState({loading:true})
        this.props.setProgress(40);
        let data=await fetch(url);
        this.props.setProgress(70)
        let parseddata= await data.json(data)
        this.props.setProgress(100)
        this.setState({
            articles:parseddata.articles,
            totalResults:parseddata.totalResults,
            loading:false,
        })

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async componentDidMount(){
          this.updatenews();
          console.log("component did mount called!")
}

fetchMoreData=async ()=>{  
        this.props.setProgress(20)
        this.setState({page:this.state.page+1})
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a06d5d684514e1cbad640667f422c58&pageSize=${this.props.pageSize}&page=${this.state.page}`
        this.setState({loading:true})
        this.props.setProgress(40)
        let data=await fetch(url);
        this.props.setProgress(70)
        let parseddata= await data.json(data)
        this.props.setProgress(100)
        this.setState({
          articles: this.state.articles.concat(parseddata.articles),
            loading:false,
        })    
    }        

  render() {    
    return (
    <>
     <h2 id='topheading'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
      {this.state.loading && <Spinner />}
      <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMoreData}
      hasMore={this.state.articles.length !== this.state.totalResults}
      loader={this.state.loading && <Spinner/>}
    >
        <div className='news'>
        {this.state.articles.map((element,index)=>{
            return <Newsitem key={index} title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} source={element.source.name} author={element.author} date={element.publishedAt} /> 
        })}
      </div>
      </InfiniteScroll>
      </>
    )
      }
}
