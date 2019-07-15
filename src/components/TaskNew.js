import React from 'react';
import TaskContainer from "../App";

export default  class TaskNew extends React.Component{



    constructor (props){
        super(props)
        this.state = {task:""}

        this.handleTaskChange = this.handleTaskChange.bind(this)
    }

    handleTaskChange(event) {
        this.setState({task: event.target.value})
    }

    handleAddTask() {
        if(this.state.task !== "")
            this.props.addTask(this.state.task)
            this.setState({task: ""})
    }

    render() {
        return (<div><label>Agregar tarea:</label>
            <input type='text' value={this.state.task} onChange={this.handleTaskChange} />
            <button onClick={this.handleAddTask.bind(this)}>Agregar</button>
        </div>)

    }

}