import './App.css';
import { Root } from './pages/root/Root';
import Home from './pages/home/Home';
import Stories from './pages/stories/Stories';
import Interns from './pages/interns/Interns';
import Contact from './pages/contact/Contact';
import { Route, createRoutesFromElements,createBrowserRouter, RouterProvider } from 'react-router-dom';
import Research from './pages/research/Research';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
          <Route index element={<Home/>}/>
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/interns' element={<Interns/>}/>
          <Route path='/research' element={<Research/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* <Route path='/Data' element={<Contact/>}/> */}
        </Route>
    )
  )
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <RouterProvider router={router}/> 
      </div>
    </QueryClientProvider>
  );
}

export default App;
