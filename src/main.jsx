import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const clerkPubKey = "pk_test_bGVhZGluZy1ncnVid29ybS02Mi5jbGVyay5hY2NvdW50cy5kZXYk";
// VITE_CLERK_PUBLISHABLE_KEY=pk_test_bGVhZGluZy1ncnVid29ybS02Mi5jbGVyay5hY2NvdW50cy5kZXYk

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
