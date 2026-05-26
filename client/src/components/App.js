import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header  from './header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header />

                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route exact path="/surveys/new" component={SurveyNew} />
                </Switch>

            </div>
        </BrowserRouter>
    );
};

export default App;