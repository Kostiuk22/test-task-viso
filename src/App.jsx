import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import SavedRecipes from './pages/SavedRecipes/SavedRecipes';
import Home from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MealDetails from './pages/MealDetails/MealDetails';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/meal/:id" element={<MealDetails />} />
      <Route path="/saved" element={<SavedRecipes />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
  );
}

export default App;
