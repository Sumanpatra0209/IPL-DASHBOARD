// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'matchWon' : 'matchLost'

  const matchStatusClassName = `matchStatus ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="matchItem">
      <img
        src={competingTeamLogo}
        className="competingTeamLogo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competingTeamName">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
