import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";

function listing() {

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg- 4mb-3">
            <MovieCard />
          </div><div className="col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div><div className="col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div><div className="col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
        </div>

      </div>

    </>
  );
}

export default listing; 