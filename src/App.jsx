import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';

import navMenus from './assets/data/menuData'


const App = () => {
  return (
    <>
      <Header menu={navMenus} />
      <Main />
      <Footer />
    </>
  )
}

export default App;