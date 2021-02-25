import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Start from './start/start';
import Faq from './faq/faq';
import Detail from './display/display_detail';
import store from './store'

const router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Start} />
                    <Route exact path="/howtostart" component={Faq} />
                    <Route exact path="/user/details" component={Detail} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default router;