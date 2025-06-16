import css from './App.module.css'
import {useState} from "react";
import type {Votes, VoteType} from "../../types/votes.ts";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import Notification from "../Notification/Notification.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import VoteOptions  from "../VoteOptions/VoteOptions.tsx";


function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const totalVotes: number = (Object.values(votes) as number[]).reduce((acc, val) => acc + val, 0);

    const positiveRates:number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

    const handleVote = (type: VoteType): void => {
        setVotes((prevState: Votes) => ({...prevState, [type]: prevState[type] + 1}))
    }

    const resetVotes = (): void => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0
        })
    }
    return (
        <div className={css.app}>
            <CafeInfo/>
            <VoteOptions
                votes={votes}
                onVote={handleVote}
                onReset={resetVotes}
                canReset={totalVotes>0}
            />
            {totalVotes ? ( <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRates}/>) : (<Notification />)}
        </div>
    )
}

export default App
