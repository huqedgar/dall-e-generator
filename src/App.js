import classNames from 'classnames/bind';
import styles from './App.scss';

const cx = classNames.bind(styles);

function App() {
   return (
      <div className={cx('App')}>
         <header className={cx('App-header')}>
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className={cx('App-link')} href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
