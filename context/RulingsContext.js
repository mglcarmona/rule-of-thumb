import { createContext, useReducer, useEffect } from 'react';
import rulings from '../public/data.json';

export const RulingsContext = createContext();

const SET_DATA = 'SET_DATA';
const VOTE = 'VOTE';
const RESET_VOTING = 'RESET_VOTING';

export const voteAction = (payload) => ({ type: VOTE, payload });
export const resetVotingAction = (payload) => ({ type: RESET_VOTING, payload });
const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case SET_DATA: {
      return action.data;
    }
    case VOTE: {
      const { type, index } = action.payload;
      return state.map((ruling, idx) => {
        if (idx === index) {
          ruling.votes[type.toLowerCase()]++;
          ruling.voted = true;
        }
        return ruling;
      });
    }
    case RESET_VOTING: {
      const { index } = action.payload;
      return state.map((ruling, idx) => {
        if (idx === index) {
          ruling.voted = false;
        }
        return ruling;
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function RulingsProvider(props) {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const formatedRulings = rulings.data.map((ruling) => ({
      ...ruling,
      voted: false,
    }));

    const data = JSON.parse(localStorage.getItem('rulings')) || formatedRulings;
    dispatch({ type: SET_DATA, data });
  }, []);

  useEffect(() => {
    localStorage.setItem('rulings', JSON.stringify(data));
  }, [JSON.stringify(data)]);

  const value = { rulings: data, dispatch };

  return (
    <RulingsContext.Provider value={value}>
      {props.children}
    </RulingsContext.Provider>
  );
}
