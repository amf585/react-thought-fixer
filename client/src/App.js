import './App.scss';
import Results from './components/Results';
import TextSubmit from './components/TextSubmit';

function App() {
  return (
    <div className="bg-light-blue flex flex-auto flex-column justify-center items-center min-h-100 pa4">
      <div className="br3 bg-white main-card pa4 w-100 w-80-ns">
        <TextSubmit/>
        <Results/>
      </div>
    </div>
  );
}

export default App;