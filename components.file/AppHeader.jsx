function AppHeader() {
  const navItems = [
    {
      title: "CHARACTERS",
      url: "/",
      active: false,
    },
    {
      title: "COMICS",
      url: "/",
      active: false,
    },
    {
      title: "MOVIES",
      url: "/",
      active: false,
    },
    {
      title: "TV",
      url: "/",
      active: false,
    },
    {
      title: "GAMES",
      url: "/",
      active: false,
    },
    {
      title: "COLLECTIBILES",
      url: "/",
      active: false,
    },
    {
      title: "VIDEOS",
      url: "/",
      active: false,
    },
    {
      title: "FANS",
      url: "/",
      active: false,
    },
    {
      title: "NEWS",
      url: "/",
      active: false,
    },
    {
      title: "SHOP",
      url: "/",
      active: false,
    },

  ]
  return (
    <header className="header">
      <img src="/dc-logo.png" alt="logo" />
      <nav>
        <ul class="nav">
          {
            navItems.map((curItem, index) => (<li key={index}>
              <a href={curItem.url}>{curItem.title}</a>
            </li>)
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;