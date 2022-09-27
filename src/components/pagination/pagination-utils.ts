export const createPaginationArray = (
  currentPage: number,
  pagesCount: number,
  siblingsCount: number,
  borderCount: number
) => {
  let pagesArr: (number | '...')[] = []

  if (
    currentPage > borderCount + siblingsCount + 2 &&
    currentPage <= pagesCount - borderCount - siblingsCount - 2
  ) {
    for (let i = 1; i <= borderCount; i++) {
      pagesArr.push(i)
    }

    pagesArr.push('...')

    for (let i = -siblingsCount; i <= siblingsCount; i++) {
      pagesArr.push(currentPage + i)
    }

    pagesArr.push('...')

    for (let i = pagesCount - borderCount + 1; i <= pagesCount; i++) {
      pagesArr.push(i)
    }
  } else if (currentPage > borderCount + siblingsCount + 2) {
    for (let i = 1; i <= borderCount; i++) {
      pagesArr.push(i)
    }

    pagesArr.push('...')

    for (
      let i = pagesCount - borderCount - siblingsCount * 2 - 1;
      i <= pagesCount;
      i++
    ) {
      pagesArr.push(i)
    }
  } else if (currentPage <= pagesCount - borderCount - siblingsCount - 2) {
    for (let i = 1; i <= borderCount + siblingsCount * 2 + 2; i++) {
      pagesArr.push(i)
    }

    pagesArr.push('...')

    for (let i = pagesCount - borderCount + 1; i <= pagesCount; i++) {
      pagesArr.push(i)
    }
  }

  //   switch (true) {
  //     case currentPage > borderCount + siblingsCount + 2 &&
  //       currentPage <= pagesCount - borderCount - siblingsCount - 2:
  //       for (let i = 1; i <= borderCount; i++) {
  //         pagesArr.push(i)
  //       }

  //       pagesArr.push('...')

  //       for (let i = -siblingsCount; i <= siblingsCount; i++) {
  //         pagesArr.push(currentPage + i)
  //       }

  //       pagesArr.push('...')

  //       for (let i = pagesCount - borderCount + 1; i <= pagesCount; i++) {
  //         pagesArr.push(i)
  //       }
  //       break
  //     case currentPage > borderCount + siblingsCount + 2:
  //       for (let i = 1; i <= borderCount; i++) {
  //         pagesArr.push(i)
  //       }

  //       pagesArr.push('...')

  //       for (
  //         let i = pagesCount - borderCount - siblingsCount * 2 - 1;
  //         i <= pagesCount;
  //         i++
  //       ) {
  //         pagesArr.push(i)
  //       }
  //       break
  //     case currentPage <= pagesCount - borderCount - siblingsCount - 2:
  //       for (let i = 1; i <= borderCount + siblingsCount * 2 + 2; i++) {
  //         pagesArr.push(i)
  //       }

  //       pagesArr.push('...')

  //       for (let i = pagesCount - borderCount + 1; i <= pagesCount; i++) {
  //         pagesArr.push(i)
  //       }
  //       break
  //   }

  return pagesArr
}
