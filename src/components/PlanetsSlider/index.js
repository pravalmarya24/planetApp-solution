import {Component} from 'react'
import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

// Write your code here
class PlanetsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {planetsList} = this.props
    return (
      <div className="planet-bg-container">
        <Slider {...settings}>
          <ul className="unordered-list">
            {planetsList.map(each => (
              <PlanetItem key={each.id} eachItem={each} />
            ))}
          </ul>
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
