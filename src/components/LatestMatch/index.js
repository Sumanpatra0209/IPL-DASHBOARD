// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latestMatchContainer">
      <h1 className="latestMatchHeading">Latest Matches</h1>
      <div className="latestMatchCard">
        <div className="latestMatchDetailsLogoContainer">
          <div className="latestMatchDetailsFirst">
            <p className="latestMatchTeamName">{competingTeam}</p>
            <p className="latestMatchDate">{date}</p>
            <p className="matchDetails">{venue}</p>
            <p className="matchDetails">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latestMatchTeamLogo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latestMatchDetailsSecond">
          <p className="latestMatchDetailsLabel">First Innings</p>
          <p className="latestMatchDetailsVale">{firstInnings}</p>
          <p className="latestMatchDetailsLabel">Second Innings</p>
          <p className="latestMatchDetailsVale">{secondInnings}</p>
          <p className="latestMatchDetailsLabel">Man Of The Match</p>
          <p className="latestMatchDetailsVale">{manOfTheMatch}</p>
          <p className="latestMatchDetailsLabel">Umpires</p>
          <p className="latestMatchDetailsVale">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
