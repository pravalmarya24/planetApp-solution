import './index.css'

// Write your code here
const PlanetItem = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem
  return (
    <li className="list">
      <div className="description-container">
        <img src={imageUrl} alt={name} className="img-size" />
        <p className="planet-name-para">{name}</p>
        <p className="planet-description-para">{description}</p>
      </div>
    </li>
  )
}

export default PlanetItem
