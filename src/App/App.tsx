import css from './App.module.css'
import CafeInfo from "../components/cafe-info/cafe-info.tsx";
import {useState} from "react";
import VoteOptions from "../components/vote-options/vote-options.tsx";
import type {Votes, VoteType} from "../types/votes.ts";
import VoteStats from "../components/vote-stats/vote-stats.tsx";
import TheNotification from "../components/the-notification/the-notification.tsx";

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
            {totalVotes ? ( <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRates}/>) : (<TheNotification />)}

        </div>
    )
}

export default App
