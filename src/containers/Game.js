import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Board } from 'containers';
import { Player, PlayerSide } from 'components';

import { CardModel } from 'models/card';


const Game = ({ boardCards }) => {
  // console.log('Props: ', boardCards);
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

export default connect(mapStateToProps)(Game);
