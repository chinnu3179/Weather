import logo from './logo.svg';
import './App.css';
import Search from './components/search';

function App() {
  const handleOnSearchChange = (searchData)=>{
    console.log(`hi`);
  }
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
    </div>
  );
}

export default App;
