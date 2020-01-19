import React from "react";

function ShortenResults() {
    return (
        <div className="shorten-link-container">
            <h4 className="display4 default-link">{this.state.defaultLink}</h4>
            <input className="shorten-link" type="text" ref={(inputLink) => this.input = inputLink} value={this.state.shortenLink}/>
            <button onClick={this.copyToClipboard} className="copy-link">Copy Link!</button>
            <div>{this.state.copy === true ? "Success!" : null}</div>
        </div>
    )
}

export default ShortenResults;