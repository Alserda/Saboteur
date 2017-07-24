import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Board } from 'containers';
import { Player, PlayerSide } from 'components';

import { CardModel } from 'models/card';

import { playCard } from 'redux/actions/board';
import { newGame } from 'redux/actions/game';

class Game extends Component {
  componentWillMount() {
    this.props.newGame({
      tilesOffset: 2,
    });
  }

  render() {
    const { board, actions } = this.props;

    return (
      <div className='Game'>
        <Board {...board} {...actions} />
        <PlayerSide>
          <Player />
        </PlayerSide>
      </div>
    );
  }
}

Game.propTypes = {
  board: PropTypes.shape({
    cards: PropTypes.arrayOf(
      PropTypes.instanceOf(CardModel)
    ),
    tiles: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  }),
  actions: PropTypes.shape({
    playCard: PropTypes.func,
    newGame: PropTypes.func,
  })
};

const mapStateToProps = state => ({
  board: state.board,
});

const mapDispatchToProps = dispatch => ({
  newGame: rules => dispatch(newGame(rules)),
  actions: bindActionCreators({
    playCard,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
