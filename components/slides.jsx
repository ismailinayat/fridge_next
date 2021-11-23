import {useState} from 'react'
import Slide from './slide1'


function Slides() {

    const [numSlides, setNumSlides] = useState(3)
    return (
        <div className="slides__container">
            <Slide></Slide>
        </div>
    )
}

export default Slides
