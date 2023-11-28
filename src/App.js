// import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {

  function receiveHeaderClick(todoText) {
    console.log("Now we're in the parent component!");
    console.log(todoText);
    // Make AJAX call in parent component
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header randomnumber="15" 
        Text="Hello World!"
        receiveHeaderClick={receiveHeaderClick}
        />

        {/* <Todo 
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        id={some-id-value}
        text={some-text-value}
        /> */}

      </header>
    </div>
  );
}

export default App;
