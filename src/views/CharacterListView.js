import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getChars} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
  }

  render() {
    if (this.props.isFetching) {
     return(
       <div>LOADING...</div>
     )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList 
          getChars={this.props.getChars}
          characters={this.props.characters} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({

    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    err: state.charsReducer.err,
  })
}

export default connect(mapStateToProps, {getChars})(CharacterListView);
