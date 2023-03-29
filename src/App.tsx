import { FC } from 'react';
import { Childre } from './interfaces';
import img from './assets/Poké_Ball_icon.svg_wogdp2.png';
import './App.css';
import { Fetch } from './components/Fetch';
import { ReactQuery } from './components';

export const App: FC = () => {
  return (
    <div className="App">
      <div>
        <a href="#">
          <img src={img} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div>
        {/* <Fetch /> */}
        <ReactQuery />
      </div>
    </div>
  );
};
