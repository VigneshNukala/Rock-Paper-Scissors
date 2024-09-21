import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'

import Header from './components/Header'
import Choice from './components/Choice'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    text: '',
    view: true,
    selectedOption: null,
    randomOption: choicesList[Math.floor(Math.random() * 3)],
  }

  onClickOption = id => {
    const {randomOption} = this.state
    const selectObj = choicesList.filter(each => each.id === id)
    const randomObj = randomOption

    if (
      (selectObj[0].id === 'PAPER' && randomObj.id === 'ROCK') ||
      (selectObj[0].id === 'SCISSORS' && randomObj.id === 'PAPER') ||
      (selectObj[0].id === 'ROCK' && randomObj.id === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        view: false,
        selectedOption: selectObj,
        text: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (
      (selectObj[0].id === 'SCISSORS' && randomObj.id === 'ROCK') ||
      (selectObj[0].id === 'ROCK' && randomObj.id === 'PAPER') ||
      (selectObj[0].id === 'PAPER' && randomObj.id === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        view: false,
        selectedOption: selectObj,
        text: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else {
      this.setState({
        view: false,
        selectedOption: selectObj,
        text: 'IT IS DRAW',
      })
    }
  }

  renderPlayingView = () => (
    <ul className="list-container">
      {choicesList.map(each => (
        <Choice
          key={each.id}
          details={each}
          onClickOption={this.onClickOption}
        />
      ))}
    </ul>
  )

  onClickTryAgain = () => {
    this.setState({
      view: true,
      randomOption: choicesList[Math.floor(Math.random() * 3)],
    })
  }

  renderResultsView = () => {
    const {text, selectedOption, randomOption} = this.state
    return (
      <div className="result-card">
        <div className="result-top">
          <div className="result">
            <p className="result-para">YOU</p>
            <img
              src={selectedOption[0].imageUrl}
              alt="your choice"
              className="image"
            />
          </div>
          <div className="result">
            <p className="result-para">OPPONENT</p>
            <img
              src={randomOption.imageUrl}
              alt="opponent choice"
              className="image"
            />
          </div>
        </div>
        <h1 className="result-head">{text}</h1>
        <button
          type="button"
          className="play-again-btn"
          onClick={this.onClickTryAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {score, view} = this.state
    return (
      <div className="bg">
        <div className="top-card">
          <Header score={score} />
          {view ? this.renderPlayingView() : this.renderResultsView()}
          <div className="bottom-card">
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button className="trigger-button" type="button">
                    Rules
                  </button>
                }
              >
                {close => (
                  <>
                    <div className="popup">
                      <div className="popup-top">
                        <button
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          <RiCloseLine className="close-icon" />
                        </button>
                      </div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                        className="popup-image"
                      />
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
