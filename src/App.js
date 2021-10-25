import Home from './Homepage/Home'
import Detailtour from './Homepage/detailTour/detailtour'
import Payment from './Homepage/payment/payment'
import Profile from './Homepage/profile/profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/payment" component={Payment}></Route>
                    <Route path="/detailtour" component={Detailtour}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;