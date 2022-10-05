import React, { useEffect, useRef, useState } from 'react'
import './slider.scss'

type Props = {
  value: number
  onChange: (newValue: number) => void
  checkPoints?: number
}

export const Slider: React.FC<Props> = ({ value = 0.5, checkPoints, onChange }) => {
  const slider = useRef<HTMLDivElement>(null)
  const point = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setPosition(
      value * (slider.current!.clientWidth - point.current!.clientWidth)
    )
  }, [])

  useEffect(() => {
      onChange(
        position / (slider.current!.clientWidth - point.current!.clientWidth)
      )

    console.log(value)
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
      } else if (checkPoints) {
        const checkPointsX = []

        for (let i = 0; i < checkPoints; i++) {
          checkPointsX.push(rightEdge / checkPoints * i)
        }

        let closestCheckpoint = 0
        let closestDistance = rightEdge

        checkPointsX.forEach((checkPointX, i) => {
          if (Math.abs(newPosition - checkPointX) < closestDistance) {
            closestDistance = Math.abs(newPosition - checkPointX)
            closestCheckpoint = i
          }
        })

        setPosition(checkPointsX[closestCheckpoint])
      } else {
        setPosition(newPosition)
      }
    }

    const putPoint = (event: React.MouseEvent) => {
      // @ts-ignore
      document.removeEventListener('mousemove', movePoint)
      // @ts-ignore
      document.removeEventListener('mouseup', putPoint)
    }
    
    // @ts-ignore
    document.addEventListener('mousemove', movePoint)
    // @ts-ignore
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
        onDragStart={(event) => {event.preventDefault()}}
        onDrag={(event) => {event.preventDefault()}}
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
