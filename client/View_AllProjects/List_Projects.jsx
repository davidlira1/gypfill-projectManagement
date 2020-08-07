import Row_Project from './Row_Project.jsx';

var List_Projects = (props) => {

    return (
        <div className="list-projects">
        {props.projects.map((project, idx) => {
            return <Row_Project key={idx} id={idx} project={project}/>
        })}
        </div>
    )

}

export default List_Projects;