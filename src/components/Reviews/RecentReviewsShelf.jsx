function RecentReviewsShelf(props) {
  const books = props.books;
  const averageScores = props.averageScores;

  return (
    <div>
      <div className="flex justify-between">
        <h2>New Releases</h2>
      </div>

      <div className="flex flex-row justify-between">
        {books.length ? (
          books
            .filter((element) => {
              const publicationYear = element.yearPublished;
              const currentYear = new Date().getFullYear();
              return publicationYear === currentYear;
            })
            .slice(0, 5)
            .map((element) => {
              const averageScore = averageScores[element.isbn];
              return (
                <div key={element.isbn} className="w-1/4 px-2 bg-columbiaBlue">
                  <a href={`/books/${element.isbn}`}>
                    <img src={element.bookCover} alt="Image of Book cover" />
                  </a>
                  {averageScore !== undefined && (
                    <p>Rating: {averageScore.toFixed(2)}/5</p>
                  )}
                </div>
              );
            })
        ) : (
          <p>Loading . . .</p>
        )}
      </div>
    </div>
  );
}

export default RecentReviewsShelf;

