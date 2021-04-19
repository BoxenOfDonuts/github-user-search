import './Pagination.css';

const Pagination = ({ postPerPage, totalPosts, goToPage, currentPage }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageLinks = pageNumbers.map((number, index) => {
    let classname = "page-number";
    if (currentPage === index+1) {
      classname += ' page-active';
    }

    return (<li key={number} className={classname}>
      <a
        href="#"
        className="page-link"
        onClick={() => goToPage(number) }
      >
        {number}
      </a>
    </li>)
  })

  return (
    <nav>
      <ul className='pagination'>
      <PrevNextPagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        goToPage={goToPage}
        increment={-1}
        name={'Previous'}
      />
        {pageLinks}
      <PrevNextPagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        goToPage={goToPage}
        increment={1}
        name={'Next'}
      />
      </ul>
    </nav>
  );
}

const PrevNextPagination = ({ currentPage, pageNumbers, goToPage, name, increment }) => {
  let movePageClass = '';

  if (currentPage === pageNumbers[pageNumbers.length -1] && name === 'Next') {
    movePageClass += ' next-disabled';
  } else if (currentPage === pageNumbers[0] && name === 'Previous') {
    movePageClass += ' prev-disabled';
  }

  return (
    <li className={movePageClass}>
      <a
        href='#'
        className={'page-link change-page'}
        onClick={() => goToPage(currentPage + increment)}
      >
        {name}
      </a>
    </li>
  );

}

export default Pagination;