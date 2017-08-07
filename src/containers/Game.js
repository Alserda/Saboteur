import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Board } from 'containers';
import { Player, PlayerSide } from 'components';

import { CardModel } from 'models/card';

import { canPlaceCard, playCard } from 'redux/actions/board';
import * as gameActions from 'redux/actions/game';

class Game extends Component {
  componentWillMount() {
    console.log('props:' , this.props);
    this.props.game.init({
      tilesOffset: 2,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.game.start();
    }, 1500);
  }

  render() {
    const { board, deck, actions } = this.props;

    return (
      <div className='Game'>
        <Board {...board} actions={actions} deck={deck} />
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
  deck: PropTypes.shape({
    remaining: PropTypes.arrayOf(
      PropTypes.instanceOf(CardModel)
    ),
    exhausted: PropTypes.arrayOf(
      PropTypes.number,
    ),
  }),
  game: PropTypes.shape({
    init: PropTypes.func.isRequired,
    start: PropTypes.func.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    playCard: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  board: state.board,
  deck: state.deck,
});

const mapDispatchToProps = dispatch => ({
  game: bindActionCreators(gameActions, dispatch),
  actions: bindActionCreators({
    playCard,
    canPlaceCard,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
