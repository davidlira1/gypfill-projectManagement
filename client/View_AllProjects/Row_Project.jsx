var Row_Project = (props) => {
    
    var openEstimate = (ev) => {
        var fileName = `${props.project.projectName} - ${props.project.companyName}`;
        fetch(`http://localhost:3000/openEstimate/${fileName}`);
    }

    return (
        <div className="row_project">
            <div id={props.id} className="col_project" onClick={openEstimate}>Open Estimate</div>
            {/* <div className="col_project">{props.project.status}</div> */}
            <div className="col_project">
                <select name="status" >
                    <option value="standby">Standby</option>
                    <option value="won">Won</option>
                </select>
            </div>
            <div className="col_project">{props.project.projectName}</div>
            <div className="col_project">{props.project.companyName}</div>
        </div>
    )
}

export default Row_Project;