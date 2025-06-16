import type {Votes, VoteType} from "../../types/votes.ts";
import css from './VoteOptions.module.css'

export interface VoteOptionsProps {
votes: Votes;
onVote: (type:VoteType) => void;
onReset: () => void;
canReset: boolean
}

const VoteOptions = ({votes,onVote,onReset,canReset}: VoteOptionsProps) => {
    const capitalizeFirstLetter = (str: string):string => {
        return str[0].toUpperCase() + str.slice(1);
    }
    const voteKeys = Object.keys(votes) as VoteType[];
    return (
        <div>
            {voteKeys.map(btn => (
                <button key={btn} onClick={() => onVote(btn)} className={css.button}>{capitalizeFirstLetter(btn)}</button>
            ))}
            {canReset && (
                <button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>
            )}
        </div>
    );
};


export default VoteOptions;