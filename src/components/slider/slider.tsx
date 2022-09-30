import React, { useEffect, useState } from 'react'

type Props = {
  value?: number
  onChange: (newValue: number) => void
}

export const Slider: React.FC<Props> = ({ value = 0.5, onChange }) => {
  const slider = React.useRef<HTMLDivElement>(null)
  const point = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(0)

    useEffect(() => {
      setPosition(value * (slider.current!.clientWidth - point.current!.clientWidth))
    }, [])

    useEffect(() => {
      onChange(position / (slider.current!.clientWidth - point.current!.clientWidth))
    })
    
    const catchPoint = (event: React.MouseEvent) => {
    const shiftX = event.clientX - point.current!.getBoundingClientRect().left
    const movePoint = (moveEvent: React.MouseEvent) => {
      const newPosition =
        moveEvent.clientX -
        shiftX -
        slider.current!.getBoundingClientRect().left
      const rightEdge = slider.current!.clientWidth - point.current!.clientWidth

      if (newPosition < 0) {
        setPosition(0)
      } else if (newPosition > rightEdge) {
        setPosition(rightEdge)
      } else {
        setPosition(newPosition)
      }

      console.log(
        position / (slider.current!.clientWidth - point.current!.clientWidth)
      )
    }

    const putPoint = (event: React.MouseEvent) => {
      document.removeEventListener('mousemove', movePoint)
      document.removeEventListener('mouseup', putPoint)
    }

    document.addEventListener('mousemove', movePoint)
    document.addEventListener('mouseup', putPoint)
  }

  const setPoint = (event: React.MouseEvent) => {
    const newPosition =
      event.clientX -
      point.current!.clientWidth / 2 -
      slider.current!.getBoundingClientRect().left
    const rightEdge = slider.current!.clientWidth - point.current!.clientWidth

    if (newPosition < 0) {
      setPosition(0)
    } else if (newPosition > rightEdge) {
      setPosition(rightEdge)
    } else {
      setPosition(newPosition)
    }
  }

  return (
    <div ref={slider} className="slider" onClick={(event) => setPoint(event)}>
      <div
        ref={point}
        className="slider__point"
        onMouseDown={(event) => catchPoint(event)}
        style={{
          left: position + 'px',
        }}
        onDragStart={() => false}
      />
      <div
        className="slider__filled-bar"
        style={{
          width: `${position + 10}px`,
        }}
      />
      <div
        className="slider__empty-bar"
        style={{
          width: `calc(100% - ${position}px)`,
        }}
      />
    </div>
  )
}
