import React from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import App from './App.jsx'
import initAnimations from './animations'
import './index.css'

const root = createRoot(document.getElementById('root'))
flushSync(() => root.render(<React.StrictMode><App /></React.StrictMode>))
initAnimations()
