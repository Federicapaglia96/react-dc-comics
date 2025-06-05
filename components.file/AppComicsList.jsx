import comics from "./comics.js";
import AppCard from "./AppCard";


function AppComicsList() {
    console.log(comics)
    return (
        <div className="row">
            {comics.map(curComics => (
                <AppCard 
                key={curComics.id}
                title={curComics.title} 
                image={curComics.thumb}/>
   
            ))}
        </div>
    );
};

export default AppComicsList;