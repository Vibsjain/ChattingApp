import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Start from './start/start';
import Faq from './faq/faq';
import Detail from './display/display_detail';

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/howtostart" component={Faq} />
                <Route exact path="/user/details" component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}

export default router;