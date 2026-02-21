import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';
import "../styles/index.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
