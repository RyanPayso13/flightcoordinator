import { createStore } from 'redux';
import flightCoordinatorApp from '../reducers/reducers'; 

const store = createStore(flightCoordinatorApp);

export default store;
