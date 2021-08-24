import React from 'react'
import { Current, Wrapper } from './Wrapper'
import PropTypes from 'prop-types';


function ScoreBoard( props ) {
    return (
        <Wrapper>
            <Current>
            Current score : { props.current }
            </Current>
              Best score : { props.best }
        </Wrapper>
    )
}

ScoreBoard.propTypes = {
    current: PropTypes.number,
    best: PropTypes.number,
};

export default ScoreBoard
