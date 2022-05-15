import { useState, useEffect } from "react";
const PaginationComponent = ({
  SetPageItem,
  SetPostPerPage,
  SetCurrentPage,
  posts,
  postPerPage,
  currentPage,
  SetPosts,
  users,
}) => {
  useEffect(() => {
    SetPosts(users);
  }, [users, SetPosts]);

  const numOfPages = Math.ceil(posts.length / postPerPage);

  const numOfButtons = [];
  for (let i = 1; i <= numOfPages; i++) {
    numOfButtons.push(i);
  }

  const prevPageClick = () => {
    if (currentPage === 1) {
      SetCurrentPage(currentPage);
    } else {
      SetCurrentPage(currentPage - 1);
    }
  };

  const nextPageClick = () => {
    if (currentPage === numOfButtons.length) {
      SetCurrentPage(currentPage);
    } else {
      SetCurrentPage(currentPage + 1);
    }
  };

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfButtons = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";
    const onPageChangeEvent = (start, end) => {
      SetPageItem({
        start: start,
        end: end,
      });
    };
    if (numOfButtons.length < 6) {
      tempNumberOfButtons = numOfButtons;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, numOfButtons.length];
    } else if (currentPage === 4) {
      const sliced = numOfButtons.slice(0, 5);
      tempNumberOfButtons = [...sliced, dotsInitial, numOfButtons.length];
    } else if (currentPage > 4 && currentPage < numOfButtons.length - 2) {
      const sliced1 = numOfButtons.slice(currentPage - 2, currentPage);
      const sliced2 = numOfButtons.slice(currentPage, currentPage + 1);

      tempNumberOfButtons = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numOfButtons.length,
      ];
    } else if (currentPage > numOfButtons.length - 3) {
      const sliced = numOfButtons.slice(numOfButtons.length - 4);

      tempNumberOfButtons = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      SetCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      SetCurrentPage(arrOfCurrButtons[3] + 2);
    } else if (currentPage === dotsLeft) {
      SetCurrentPage(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfButtons);
    const value = currentPage * postPerPage;

    onPageChangeEvent(value - postPerPage, value);
  }, [
    currentPage,
    postPerPage,
    numOfPages,
    arrOfCurrButtons,
    numOfButtons,
    SetCurrentPage,
    SetPageItem,
  ]);
  return (
    <div className="table-filter-info">
      <div className="dt-pagination">
        <ul className="dt-pagination-ul">
          <li className={`dt-item ${currentPage === 1 ? "disabled" : ""}`}>
            <span className="dt-link" onClick={prevPageClick}>
              Prev
            </span>
          </li>
          {arrOfCurrButtons.map((data, index) => {
            return (
              <li
                key={index}
                className={`dt-item ${currentPage === data ? "active" : ""}`}
              >
                <span className="dt-link" onClick={() => SetCurrentPage(data)}>
                  {data}
                </span>
              </li>
            );
          })}
          <li
            className={`dt-item ${
              currentPage === numOfButtons.length ? "disabled" : ""
            }`}
          >
            <span className="dt-link" onClick={nextPageClick}>
              Next
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaginationComponent;
