import { Children, FC, ReactNode, useState } from 'react'
import './carousel.scss'

type Props = {
    children: ReactNode
}

export const Carousel: FC<Props> = ({children}) => {
    const [slide, setSlide] = useState(1)
    const slides = Children.toArray(children)
    const slidesAmount = slides.length

    const changeSlide = (direction: string) => {
        switch (direction) {
            case('prev'):
                if (slide !== 1) {
                    setSlide(slide - 1)
                }
            break
            case ('next'):
                if (slide !== slidesAmount) {
                    setSlide(slide + 1)
                }
            break
            default:
        }
    }

    return (
        <div className="carousel">
            <button 
                className="carousel__button"
                onClick={() => changeSlide('prev')}
            >
                {'<'}
            </button>
            <div  className="carousel__slide-container">
                <div 
                    className="carousel__slides"
                    style={{
                        width: `${100 * slidesAmount}%`,
                        transform: `translateX(${-(100 / slidesAmount) * (slide - 1)}%)`
                    }}
                >
                    {slides.map((slide, index) => 
                        <div 
                            className="carousel__slide"
                            key={index}
                        >
                            {slide}
                        </div>
                    )}
                </div>
            </div>
            <button 
                className="carousel__button"
                onClick={() => changeSlide('next')}
            >
                {'>'}
            </button>
        </div>
    )
}