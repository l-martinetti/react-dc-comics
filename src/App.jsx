import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';
import Jumbotron from './assets/components/Jumbotron'

import { navMenus } from './assets/data/menuData'


const App = () => {
  return (
    <>
      <Header menu={navMenus} />
      <Jumbotron />
      <Main />
      <Footer />
    </>
  )
}

export default App;