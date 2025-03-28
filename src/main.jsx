import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const clerk_key = import.meta.env.VITE_CLERK_KEY;
const router=createBrowserRouter([

   {
    path: "/",
    element: <App />, // Main layout with Nav/Footer
   }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
