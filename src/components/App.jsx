import React from 'react'
import {Route,Switch} from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Skill from './Skill';
import Random from './Random';


 const App = () => {
    return (
        
        <div>
            <Switch>
            <Route path="/portfolio" exact component={Home} />
            <Route path="/portfolio/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/skill" exact component={Skill} />
            <Route path="/random" exact component={Random}/> 
            </Switch>
        </div>
        
    )
}

export default App;