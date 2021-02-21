import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Start from './start/start';
import Faq from './faq/faq';

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/howtostart" component={Faq} />
            </Switch>
        </BrowserRouter>
    )
}

export default router;