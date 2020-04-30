import React from 'react';
import PopularAnimes from './PopularAnimes.jsx';
import SearchAnimes from './SearchAnimes.jsx';
import { Container, TextField } from '@material-ui/core'
import jikanjs from 'jikanjs';
class LoadupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searching:false,
      searchResults:[],
      viewState:'',
    }
    this.form = React.createRef();
    this.text = React.createRef();
    this.onEnterpress = this.onEnterpress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
  }

  onEnterpress(e){
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if(this.state.searchText.length > 2) {
        this.handleSubmit(this.state.searchText);
      }
    }
  }

  handleSubmit(text){
    event.preventDefault();
    this.setState({searching:true,viewState:'searching'});
    jikanjs.search('anime',text,1,{},12)
    .then(data=>{
      this.setState({
        searching:false,
        searchResults: data.results
      })
    })
  }

  _handleTextFieldChange(e) {
    this.setState({
      searchText: e.target.value
    })
  }
  render() {

  return (<Container fixed >
      <form>
      <TextField
        id="searchAnime"
        label="Search Anime"
        type="search"
        placeholder="Search Anime"
        variant="outlined"
        fullWidth
        style={{marginTop:"-1em"}}
        onKeyDown={this.onEnterpress}
        onChange={this._handleTextFieldChange}
      />
      </form>
    {this.state.searching ? "Loading" : (this.state.viewState === 'searching') ? <SearchAnimes animes={this.state.searchResults}/>: null }
    <PopularAnimes animes={this.props.animes}/>

    </Container>);
  }
};


export default LoadupPage;