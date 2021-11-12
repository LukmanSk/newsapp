import React, { Component } from "react"

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props
    let a = new Date(date)
    let b = a.toGMTString()

    let defaulturl =
      "https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg"

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl === null ? defaulturl : imageUrl}
            className="card-img-top img-fluid"
            alt="random"
            style={{ height: "150px", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title} <span className="badge bg-danger">{source.name}</span>
            </h5>

            <p className="card-text">{description}</p>
            <p className="card-text">
              <strong className="text-muted">
                By {author !== null ? author : "unknown"} on{" "}
                {b !== null ? b : "not found"}
              </strong>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}
