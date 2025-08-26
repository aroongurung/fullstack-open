import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad, allClicks}) => {
    const average = (good - bad) / (allClicks);
    const positive = (good * 100) / (allClicks);

    if(!(good || neutral || bad)) {
        return <p>No feedback given</p>
    }
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={allClicks} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive + " %"} />            
            </tbody>  
        </table>
    )
}
export default Statistics;