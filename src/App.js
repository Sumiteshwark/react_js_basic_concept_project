import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import movies from './movies.json';
import Usestates from './components/Usestate';
// import logo from './img/sk.jpg';
import Form from './components/Form';
import HookuseEffect from './components/HookuseEffect';
import ContextApi from './components/ContextApi';
import Useref from './components/Useref';
import Usereducer from './components/Usereducer';
import Usememo from './components/Usememo';
import Usecallback from './components/Usecallback_todo/Usecallback';
import Usefetch from './components/Usefetch/Usefetch';
import LoadSpinner from './components/LoadSpinner';

function App() {
  return (
    <div className='App'>
        {/* 0th problem i.e. 12th problem */}
        <div>
          <LoadSpinner />
        </div>

        {/* 1st problem */}
        {/* <img className='img' src={logo} alt="" /> */}
        <Header />

        {/* 2nd problem props */}
        <div className='main-movies'>
          {
            movies.map((element,index)=>{
              return(
                <Movies key={index} title={element.Title} year={element.Year} img={element.Poster}/>
              )
            })
          }
        </div>

        {/* 3rd problem useState*/}
        <div className='main-hook'>
          <Usestates />
        </div>

        {/* 4th problem useState advance*/}
        <div className='main-form'>
          <Form />
        </div>

        {/* 5th problem useEffect */}
        <div className='main-hook-usestate'>
          <HookuseEffect />
        </div>

        {/* 6th problem context api */}
        <div>
          <ContextApi />
        </div>

        {/* 7th problem useref */}
        <div className='useref_main'>
          <Useref />
        </div>

        {/* 8th problem Usereducer */}
        <div className='usereducer_main'>
          <Usereducer />
        </div>

        {/* 9th problem useFetch */}
        <div className='usefetch_main'>
          <Usefetch />
        </div>

        {/* 10th problem Usememo */}
        <div className='usememo_main'>
          <Usememo />
        </div>

        {/* 11th problem Usecallback */}
        <div className='usecallback_main'>
          <Usecallback />
        </div>

        {/* 10:16 */}
    </div>
  );
}

export default App;