
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div className='flex justify-center'>
      <div className='w-[90%] p-4 md:w-1/2 bg-sky-100 my-4 md:my-12 sm:p-4 md:p-8 xl:p-20 rounded-lg'>
        <Header />
        <TodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
