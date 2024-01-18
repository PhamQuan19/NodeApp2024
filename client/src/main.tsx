import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import {RouterProvider} from 'react-router-dom';
import router from './routers/index.jsx';
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Container } from '@mui/material';
import './firebase/config.jsx';
import moduleName from '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{textAlign:'center', marginTop:'50px'}}>
      <RouterProvider router={router}>
      
      </RouterProvider>
    </Container>

  </React.StrictMode>,
)
