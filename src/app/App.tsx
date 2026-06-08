import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Agentation } from 'agentation';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </>
  );
}