import logo from './logo.svg';
import './App.css';

import OrderSummary from './components/order-summary/order-summary.component';

function App() {
  return (
    <div className="App">
      <OrderSummary/>
      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Eric Shyu</a>.
  </div>
    </div>
  );
}

export default App;
