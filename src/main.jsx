import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../css/swiper-bundle.min.css';
import '../css/banner.css';
import '../css/search.css';
import '../css/menu.css';
import '../css/ystk.css';
import '../css/ad.css';
import '../css/base.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/list.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
