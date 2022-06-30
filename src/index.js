import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes, Route } from "react-router-dom";
import 'react-app-polyfill/ie11'; // for ie11
import 'react-app-polyfill/stable'; // for ie11
import App from './App';
import ReviewRequest from './pages/ReviewRequest';
import ReviewPay from './pages/ReviewPay';
import ReviewConfirm from './pages/ReviewConfirm';
import ChatPay from './pages/ChatPay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<Routes>
			<Route path='/' index element={<App />} />
			<Route path='/review/request' element={<ReviewRequest />} />
			<Route path='/review/pay' element={<ReviewPay />} />
			<Route path='/review/confirm' element={<ReviewConfirm />} />
			<Route path='/chat/pay' element={<ChatPay />} />
		</Routes>
	</HashRouter>
);