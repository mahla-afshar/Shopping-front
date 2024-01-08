import {BrowserRouter} from 'react-router-dom';
import { DataProvider } from './components/Context';
import Header from './components/Header';
import Content from './components/Content';
import axios  from 'axios';


axios.defaults.withCredentials = true;   // برای انتقال بین بک اند و فرانت


function App() {
  return (
   <DataProvider>
      <div className="main-website">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Content />
        </BrowserRouter>
      </div>
    </div>
   </DataProvider>
  );
}

export default App;
