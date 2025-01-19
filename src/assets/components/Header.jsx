const Header = () => {
    return (
        <header>
            <div className="container d-flex justify-space-between">
                <div className="logo">
                    <a href="#">
                        <img src="/src/assets/img/dc-logo.png" alt="DC" />
                    </a>
                </div>
                <div className="navBar">
                    <nav>
                        <ul className="navList">
                            <li>
                                <a href="">characters</a>
                            </li>
                            <li>
                                <a className="active" href="">comics</a>
                            </li>
                            <li>
                                <a href="">movies</a>
                            </li>
                            <li>
                                <a href="">tv</a>
                            </li>
                            <li>
                                <a href="">games</a>
                            </li>
                            <li>
                                <a href="">collectibles</a>
                            </li>
                            <li>
                                <a href="">videos</a>
                            </li>
                            <li>
                                <a href="">fans</a>
                            </li>
                            <li>
                                <a href="">news</a>
                            </li>
                            <li>
                                <a href="">shop</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;  