import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Page404 from './components/404.jsx'
import Saludo from './components/Saludo.jsx'
import Products from './components/Products.jsx'
import SaludoName from './components/SaludoName.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Products />} />
                <Route path='saludo' element={<Saludo />} />
                <Route path='saludo/:name' element={<SaludoName />}></Route>
            </Route>
            <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
)
