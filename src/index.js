import React from 'react';
import ReactDOM from 'react-dom';

//Pages
import Home from './pages/Home';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
