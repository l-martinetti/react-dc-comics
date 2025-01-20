const Header = ({ menu }) => {
    return (
        <header>
            <div className="container d-flex justify-space-between">
                <div className="logo">
                    <a href="#">
                        <img src="/img/dc-logo.png" alt="DC" />
                    </a>
                </div>
                <div className="navBar">
                    <nav>
                        <ul className="navList">
                            {menu.map(menuVoice => (
                                <li key={`header-menu-id-${menuVoice.id}`}>
                                    <a href='#'>{menuVoice.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;  