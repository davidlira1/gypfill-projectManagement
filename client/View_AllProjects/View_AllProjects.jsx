import List_Projects from './List_Projects.jsx';
import listOfProjects from './listOfProjects.js';

class View_AllProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: listOfProjects
        }
    }

    render() {
        return (
            <div>
                <div className='title'>All Projects</div>
                <List_Projects projects={this.state.projects}/>
            </div>
        )
    }
}

export default View_AllProjects;