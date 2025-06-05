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

  const DC = [
    {
      title: "Terms of Use",
      url: "/terms of use"
    },
    {
      title: "Privacy policy (New)",
      url: "/privacy policy"
    },
    {
      title: "Ad Choices",
      url: "/ad choices"
    },
    {
      title: "Advertising",
      url: "/advertising"
     
    },
      {
      title: "Jobs",
      url: "/jobs"
     
    },
      {
      title: "Subscriptions",
      url: "/subscriptions"
    },
      {
      title: "Talent Workshop",
      url: "/talent workshop"
    },
      {
      title: "CPSC Certificates",
      url: "/cpsc certificates"
    },
      {
      title: "Ratings",   
      url: "/ratings"
    },
    {
      title: "Shop Help",
      url: "/shop help"
    },

  ];

   const SITES  = [
    {
      title: "Terms of Use",
      url: "/terms of use"
    },
    {
      title: "Privacy policy (New)",
      url: "/privacy policy"
    },
    {
      title: "Ad Choices",
      url: "/ad choices"
    },
    {
      title: "Advertising",
      url: "/advertising"
     
    },
  ]

  //prima lista
  return (
    <div className="links">
      <div className="LinksGroup">
        <div className="listGroup">
          <h4>DC COMICS</h4>
          <ul className="list">
            {
              dcComics.map((curItem, index) => (
                <li key={index}>
                  <a className="linksmall" href={curItem.url}>{curItem.title}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="listGroup">
          <h4>DC</h4>
          <ul className="list">
            {
              DC.map((curItem, index) => (
                <li className="lilinks" key={index}>
                  <a className="linksmall" href={curItem.url}>{curItem.title}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="listGroup">
          <h4>SITES</h4>
          <ul className="list">
            {
              SITES.map((curItem, index) => (
                <li className="lilinks" key={index}>
                  <a className="linksmall" href={curItem.url}>{curItem.title}</a>
                </li>
              ))}
          </ul>
        </div>

      </div>
      <img className="imgOverlay" src="/dc-logo-bg.png"></img>
    </div>

  )
};


export default AppLinks;