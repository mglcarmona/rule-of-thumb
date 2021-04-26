import { useState, useContext } from 'react';
import RulingCard from '../components/RulingCard';
import DropdownSelect from '../components/DropdownSelect';
import useMediaQuery from '../hooks/useMediaQuery';
import {
  resetVotingAction,
  RulingsContext,
  voteAction,
} from '../context/RulingsContext';
const viewTypes = ['List', 'Grid'];

export default function Rulings() {
  const [viewType, setViewType] = useState(viewTypes[0]);
  const [selectedVote, setSelectedVote] = useState({});
  const isTablet = useMediaQuery('(min-width: 768px)');
  const { rulings, dispatch } = useContext(RulingsContext);

  const handleSelected = ({ selectedItem }) => setViewType(selectedItem);
  const isList = viewType === viewTypes[0];

  const selectVote = (type, index) => setSelectedVote({ type, index });
  const vote = () => dispatch(voteAction(selectedVote));
  const reset = (index) => {
    dispatch(resetVotingAction({ index }));
    setSelectedVote({});
  };

  return (
    <main role="main">
      <div className="flex justify-between align-center">
        <h2>Previous Rulings</h2>

        {isTablet && (
          <DropdownSelect
            items={viewTypes}
            selectedItem={viewType}
            handleSelected={handleSelected}
          />
        )}
      </div>
      <div className={`main ${isList ? 'list' : ''}`}>
        {rulings.map((ruling, idx) => {
          const selected = selectedVote.index === idx;
          return (
            <RulingCard
              key={idx}
              data={ruling}
              isList={isList}
              selectVote={selectVote}
              selectedVote={selected && selectedVote.type}
              index={idx}
              vote={vote}
              reset={reset}
            />
          );
        })}
      </div>
    </main>
  );
}
