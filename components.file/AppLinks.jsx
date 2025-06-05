function AppLinks() {
  const dcComics = [
    {
      title: "Characters",
      url: "/characters"
    },
    {
      title: "Comics",
      url: "/Comics"
    },
    {
      title: "Movies",
      url: "/movies"
    },
    {
      title: "TV",
      url: "/tv"
    },
    {
      title: "Games",
      url: "/Games"
    },
    {
      title: "Videos",
      url: "/Videos"
    },
    {
      title: "News",
      url: "/News"
    }
  ];

  const DC=[
     {
      title: "Characters",
      url: "/characters"
    },
    {
      title: "Comics",
      url: "/Comics"
    },
    {
      title: "Movies",
      url: "/movies"
    },
    {
      title: "TV",
      url: "/tv"
    }

  ];


//prima lista
  return (
    <div className="links">
      <div className="LinksGroup">
        <h4>DC COMICS</h4>
        <ul className="list">
          {
            dcComics.map((curItem, index) => (
              <li key= {index}>
                <a href={curItem.url}>{curItem.title}</a>
              </li>
            ))}
        </ul>
              <h4>DC</h4>
        <ul className="list">
          {
            DC.map((curItem, index) => (
              <li key= {index}>
                <a href={curItem.url}>{curItem.title}</a>
              </li>
            ))}
        </ul>
      </div>
      <img className="imgOverlay" src="/dc-logo-bg.png"></img>
    </div>

  )
};


export default AppLinks;