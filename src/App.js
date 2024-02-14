import image from './food.png';
import imageOne from './vegetable.png'
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div>
    <div className='container'>
        <h1>Grocery List</h1>
        <img className="image"src={image} width='150px' height='100' alt='food'/>
      </div>
    
      <div className='Header'>
        <GroceryList/>
        </div>
    <div className='imageOne'>
        <img src={imageOne} width='120px' alt='icon'/>
    </div>
  
  </div>
  );
}

export default App;
