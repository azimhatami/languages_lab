import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

axios.interceptors.request.use((request) => {
  request.headers.Authorization = 'token'
  console.log(`${request.method} request sent to ${request.url}}`)
  return request
}, (error) => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
  console.log(response)
  return response
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
