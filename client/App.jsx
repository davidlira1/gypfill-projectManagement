import View_AllProjects from './View_AllProjects/View_AllProjects.jsx';

import './styles.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            view: 'View_AllProjects' //'list_OnGoingProjects'
        }
    }

    render() {
        var view = '';

        switch(this.state.view) {
            case 'View_AllProjects':
                view = <View_AllProjects />
        }
        
        return (
            <div>
                <h1 className='header'>Gyp-Fill Enterprise</h1>
                {view}
            </div>
        )
    }
}

export default App;