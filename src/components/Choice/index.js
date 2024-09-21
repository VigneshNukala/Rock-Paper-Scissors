import './index.css'

const Choice = props => {
  const {details, onClickOption} = props
  const {id, imageUrl} = details
  const onOption = () => {
    onClickOption(id)
  }
  return (
    <li>
      <button
        className="btn"
        onClick={onOption}
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
      >
        <img src={imageUrl} alt={id} className="image" />
      </button>
    </li>
  )
}

export default Choice
