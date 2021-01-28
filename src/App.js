import React from "react";
import './App.css';

class App extends React.Component {
  state={
    allBreeds: [],
    selectedBreedImgs: [],
    page: 1,
  }

  componentDidMount(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => this.setState({allBreeds: data.message}))
  }

  selectedBreed = (e) => {
    this.setState({selectedBreed: e.target.value})
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
    .then(resp => resp.json())
    .then(data => this.setState({selectedBreedImgs: data.message}))
  }

  render(){
    // console.log(Object.values(this.state.allBreeds))
    console.log(this.state.selectedBreedImgs)
    return (
      <div className="App">
        <div>
          <select className="" onChange={this.selectedBreed}>
            <option></option>
            {Object.keys(this.state.allBreeds).map(breed => {
              return(
                <option value={breed}>{breed}</option>
              )
            })}
          </select>
        </div>

        <div>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>

        <div>
          {this.state.selectedBreedImgs.map(dogImg => {
            return (
              <img src={dogImg} width="200px"/>
            )
          }
          )}
        </div>
      </div>
    );
  }
}
export default App;
