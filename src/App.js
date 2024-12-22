// import './App.css';
import { Root } from './pages/root/Root';
import Home from './pages/home/Home';
import { Route, createRoutesFromElements,createBrowserRouter, RouterProvider } from 'react-router-dom';
import Research from './pages/research/Research';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Opportunities from './pages/opportunities/Opportunities';
import Teaching from './teaching/Teaching';
import Publications from './pages/publications/Publications';
import News from './pages/news/News';
import People from './pages/people/People';

function App() {
  const queryClient = new QueryClient()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
          <Route index element={<Home/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/peoples' element={<People/>}/>
          <Route path='/research' element={<Research/>}/>
          <Route path='/opportunities' element={<Opportunities/>}/>
          <Route path='/teaching' element={<Teaching/>}/>
          <Route path='/publications' element={<Publications/>}/>
          {/* <Route path='/Teaching' element={<Teaching/>}/> */}
        </Route>
    )
  )
  return (
    <QueryClientProvider client={queryClient}>
      <div className="m-0 p-0 font-sans w-full h-[100%]">
        <RouterProvider router={router}/> 
      </div>
    </QueryClientProvider>
  );
}

export default App;
