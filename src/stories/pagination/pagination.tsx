import classNames from 'classnames'
import { createPaginationArray } from './pagination-utils'
import './pagination.scss'

type Props = {
  currentPage: number
  pagesCount: number
  siblingsCount?: number
  borderCount?: number
  onChange: (value: number) => void
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  pagesCount,
  siblingsCount = 1,
  borderCount = 1,
  onChange,
}) => {
  let pagesArr = createPaginationArray(currentPage, pagesCount, siblingsCount, borderCount);

  const nextPage = () => {
    if (currentPage !== pagesCount) {
      onChange(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      onChange(currentPage - 1)
    }
  }

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={prevPage}>
        {currentPage === 1 ? '|' : '<'}
      </button>

      <ul className="pagination__btns-nums">
        {pagesArr.map((page) =>
          page === '...' ? (
            <li className="pagination__btn-num">...</li>
          ) : (
            <li
              className={classNames('pagination__btn-num', {
                'pagination__btn-num--active': currentPage === page,
              })}
              key={page}
              onClick={() => onChange(page)}
            >
              {page}
            </li>
          )
        )}
      </ul>

      <button className="pagination__btn" onClick={nextPage}>
        {currentPage === pagesCount ? '|' : '>'}
      </button>
    </div>
  )
}
