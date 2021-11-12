import React, { Component } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import PropTypes from "prop-types"

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`
  }

  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69cbf71f24054d2fa79cf12ab2ab854c&page=${this.state.page}
    &pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    let totalResults = await parsedData.totalResults
    console.log(totalResults)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }
  async componentDidMount() {
    this.updateNews()
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          News Monkey - Top {this.capitalize(this.props.category)} Headlines
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title !== null ? element.title : null}
                    description={
                      element.description !== null ? element.description : null
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              )
            })}
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              this.state.totalResults / this.props.pageSize
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}
