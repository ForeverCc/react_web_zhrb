import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import PageIndex from '../pages/pageIndex.js';
import NotFound from '../pages/notFound.js';
import PageDetail from '../pages/pageDetail.js';
class AppRouter extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={PageIndex}></Route>
                <Route path="/news" component={PageDetail}></Route>
                <Route path="*" component={NotFound}></Route>
            </Router>
        );
    }
}

export default AppRouter;
