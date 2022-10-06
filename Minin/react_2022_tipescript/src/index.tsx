import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ModalState } from './context/ModalContext'











const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <ModalState>
            <App />
        </ModalState>
    </BrowserRouter>
)

