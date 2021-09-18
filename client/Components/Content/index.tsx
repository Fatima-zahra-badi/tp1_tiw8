import React = require('react')
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'

const Content = () => {
  return (
        <div>
        <img src={image1} alt='image1' height="300px" width="40%"/>
        <img src={image2} alt='image2' height="300px" width="40%"/>
        </div>
  )
}
export default Content
