import './index.css'
import {Para} from '../../styledComponents'

const Header = props => {
  const {score} = props
  return (
    <div className="header-bg">
      <h1 className="header-head">ROCK PAPER SCISSORS</h1>
      <div className="header-right">
        <p className="header-para">Score</p>
        <Para className="header-score">{score}</Para>
      </div>
    </div>
  )
}

export default Header
