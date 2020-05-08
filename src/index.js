import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

let sliderElement = {}

const SlickGoTo = (props) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      setUpdateCount(updateCount + 1)
    },
    beforeChange: (current, next) => {
      setSlideIndex(next)
    }
  }
  return (
    <div>
      <h2>Slick Go To</h2>
      <p>Total updates: {updateCount} </p>
      <input
        onChange={e => sliderElement.slickGoTo(e.target.value)}
        value={slideIndex}
        type='range'
        min={0}
        max={3}
      />
      <Slider ref={slider => (sliderElement = slider)} {...settings}>
        <div>
          <h1>Slide 1</h1>
        </div>
        <div>
          <h1>Slide 2</h1>
        </div>
        <div>
          <h1>Slide 3</h1>
        </div>
        <div>
          <h1>Slide 4</h1>
        </div>
      </Slider>
    </div>
  )
}

ReactDOM.render(<SlickGoTo />, document.getElementById('root'))
