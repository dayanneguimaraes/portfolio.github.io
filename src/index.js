import ReactDOM from "react-dom/client";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);