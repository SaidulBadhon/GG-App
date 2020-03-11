import React, {Component} from "react"
import "./MemeGenerator.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class MemeGenerator extends Component {
  constructor() {
    super()

    this.state =
    {
      loading: false,
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: {}
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value })
  }

  handleSubmit(event) {
      event.preventDefault()

      const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
      const randomMemeImg = this.state.allMemeImgs[randomNumber].url;
      console.log(randomMemeImg);
      this.setState({randomImage:randomMemeImg})
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({
          allMemeImgs: memes,
          loading: false
        });
        console.log(memes[0]);

      });
  }

  render(){
    return (
      <div>
        <h1>Meme Generator</h1>

        <form className="meme-form" onSubmit={this.handleSubmit}>
          <TextField
          id="outlined-basic" label="Top Text" variant="outlined"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="Top Text"
          />
          <br></br>
          <TextField
            id="outlined-basic" label="Bottom Text" variant="outlined"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="Bottom Text"
          />
          <br></br>
  
          <Button color="secondary">Gen</Button>

        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt=""></img>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>

      </div>
    )
  }
}

export default MemeGenerator
