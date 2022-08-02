
import './App.css';
import Filter from './components/filter';
import Navbar from './components/navbar';
import AddTodobar from './components/AddTodobar';

function App() {
 
  return (

    <div class="container1">
      <AddTodobar/>
       <Navbar />
       <Filter  />  
    </div>
    
  );
}

export default App;


