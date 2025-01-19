import ComicsList from './ComicsList';

const Main = () => {
    return (
        <main>
            <div className="black-background h-100">
                <div className="container">
                    {/* <span> --&gt; Content goes here &lt;-- </span> */}
                </div>
            </div>
            <div className="blue-background h-100">
                <div className="container">
                    <nav>
                        <ul className="d-flex justify-space-between">
                            <li>
                                <a className="white-text margin-right-10" href="#">
                                    <img src="/src/assets/img/buy-comics-digital-comics.png" alt="buy" />
                                </a>
                                <a href="#">
                                    <span className="white-text">
                                        digital comics
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="white-text margin-right-10" href="#">
                                    <img src="/src/assets/img/buy-comics-merchandise.png" alt="buy" />
                                </a>
                                <a href="#">
                                    <span className="white-text">
                                        dc merchandise
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="white-text margin-right-10" href="#">
                                    <img src="/src/assets/img/buy-comics-subscriptions.png" alt="buy" />
                                </a>
                                <a href="#">
                                    <span className="white-text">
                                        subscription
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="white-text margin-right-10" href="#">
                                    <img src="/src/assets/img/buy-comics-shop-locator.png" alt="buy" />
                                </a>
                                <a href="#">
                                    <span className="white-text">
                                        comic shop locator
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="white-text margin-right-10" href="#">
                                    <img src="/src/assets/img/buy-dc-power-visa.svg" alt="buy" />
                                </a>
                                <a href="#">
                                    <span className="white-text">
                                        dc power visa
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    )
}

export default Main;
