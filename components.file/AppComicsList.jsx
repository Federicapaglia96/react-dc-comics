import comics from "./comics.js";


function ComicsList() {
    console.log(comics)
    return (
        <div className="row">
            {comics.map(curComics => (
                <div className="card">
                    <img src={curComics.thumb} />
                </div>
            ))}
        </div>
    );
};

export default ComicsList;