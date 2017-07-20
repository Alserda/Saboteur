import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Board } from 'containers';
import { Player, PlayerSide } from 'components';

import { CardModel } from 'models/card';

import { playCard } from 'redux/actions/board';

const Game = ({ boardCards, actions }) => {
  console.log('Props: ', boardCards, actions);
  return (
    <div className='Game'>
      <Board cards={boardCards} />
      <PlayerSide>
        <Player />
      </PlayerSide>
    </div>
  );
};

Game.propTypes = {
  boardCards: PropTypes.arrayOf(
    PropTypes.instanceOf(CardModel)
  )
};

const mapStateToProps = state => ({
  boardCards: state.board,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    playCard,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
