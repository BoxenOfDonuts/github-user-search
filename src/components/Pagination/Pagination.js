const Pagination = ({ postPerPage, totalPosts, goToPage, currentPage }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageLinks = pageNumbers.map(number => (
    <li key={number} className="page-number">
      <a
        href="!#"
        className="page-link"
        onClick={() => goToPage(number) }
      >
        {number}
      </a>
    </li>
  ))

  return (
    <nav>
      <PrevNextPagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        goToPage={goToPage}
        increment={-1}
        name={'Previous'}
      />
      <ul className='pagination'>
        {pageLinks}
      </ul>
      <PrevNextPagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        goToPage={goToPage}
        increment={1}
        name={'Next'}
      />
    </nav>
  );
}

const PrevNextPagination = ({ currentPage, pageNumbers, goToPage, name, increment }) => {
  let movePageClass = 'page-link change-page';

  if (currentPage === pageNumbers[pageNumbers.length -1]) {
    movePageClass += ' next-disabled';
  } else if (currentPage === pageNumbers[0]) {
    movePageClass += ' next-disabled';
  }

  return (
    <a
      href='!#'
      className={movePageClass}
      onClick={() => goToPage(currentPage + increment)}
    >
      {name}
    </a>
  );

}

export default Pagination;