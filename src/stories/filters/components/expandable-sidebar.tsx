import classNames from 'classnames'
import { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import '../styles'

type Props = {
  children: ReactNode
  title: string
  status: boolean
  onChange: (value: boolean) => void
}

export const ExpandableSidebar: FC<Props> = ({
  children,
  title,
  status,
  onChange,
}) => {
  const [styleStatus, setStyle] = useState(false)
  const [showStatus, setShow] = useState(false)

  useEffect(() => {
    if (status) {
      setShow(status)
      setTimeout(() => {
        setStyle(status)
      }, 50)
    } else if (!status) {
      setStyle(status)
      setTimeout(() => {
        setShow(false)
      }, 500)
    }
  }, [status])

  const sidebar = useRef<HTMLDivElement>(null)

  const handleClick = (event: MouseEvent) => {
    if (event.target === sidebar.current) {
      onChange(false)
    }
  }

  return (
    <>
      {showStatus && (
        <div
          className={classNames('sidebar', { 'sidebar--shown': styleStatus })}
          onClick={(event) => handleClick(event)}
          ref={sidebar}
        >
          <div className="sidebar__content">
            <div className="sidebar__header">
              <h1 className="sidebar__title">{title}</h1>
              <div
                className="sidebar__close-button"
                onClick={() => onChange(false)}
              >
                <CloseIcon />
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
