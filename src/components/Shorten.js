import React from "react";

class Shorten extends React.Component {
    constructor() {
        super()
        this.state = {
            inputField: "",
            responseApi: {},
            shortenLink: "",
            copyBtnText: "Copy Link!",
            showResult: false,
            error: "",
            validUrl: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getUrl = this.getUrl.bind(this)
        this.copyToClipboard = this.copyToClipboard.bind(this)
        this.validateInputUrl = this.validateInputUrl.bind(this)
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    validateInputUrl(input) {
        var re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

        if (input === "") {
            return "Please add a link"
        } else if (re.test(input.toLowerCase()) === false) {
            return "Please add a valid link"
        } else {
            return ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            showResult: false
        })

        const errorValidate = this.validateInputUrl(this.state.inputField);
        
        if (errorValidate === "") { //correct input
            this.getUrl(this.state.inputField);
            this.setState({
                validUrl: this.state.inputField
            })
        } else {
            this.setState({ //incorrect input
                error: errorValidate
            })
        }

    }

    getUrl(defaultUrl) {
        const apiResponse = fetch("https://rel.ink/api/links/", {
            method: "POST",
            body: JSON.stringify({url: defaultUrl}),
            headers: {"Content-type": "application/json"}
        });

        apiResponse
            .then(response => response.json())
            .then(response => {
                this.setState({
                    responseApi: response
                })
                const shortenLinkUrl = `https://rel.ink/${this.state.responseApi.hashid}`
                this.setState({
                    error: "",
                    shortenLink: shortenLinkUrl,
                    copyBtnText: "Copy",
                    showResult: true
                })
            });
    }

    copyToClipboard() {
        const copyLink = this.input
        copyLink.select()
        document.execCommand("copy");
        this.setState({
            copyBtnText: "Copied!"
        })
    }

    render() {
        return (
            <section className="shorten" id="shorten">
                <div className="shorten__banner">
                    <form onSubmit={this.handleSubmit} className="shorten__form">
                        <input
                            name="inputField"
                            value={this.state.inputField}
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Add Link Here..."
                        />
                        <button>Shorten It!</button>
                    </form>
                    <span className="error">{this.state.error}</span>
                </div>
                <div className={this.state.showResult === true ? "results-show" : "results-hidden"}>
                    <input readOnly className="default-link" type="text" value={this.state.validUrl} />
                    <input readOnly className="shorten-link" type="text" ref={(inputLink) => this.input = inputLink} value={this.state.shortenLink}/>
                    <button onClick={this.copyToClipboard} className="copy-link">{this.state.copyBtnText}</button>
                </div>
            </section>
        )
    }
}

export default Shorten;