import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/reset.css'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                  <App />
                  <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
