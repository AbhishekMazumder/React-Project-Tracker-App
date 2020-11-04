import React, { useState } from 'react';

const TASKS_STATUSES = ['Unstarted', 'In Progess', 'Completed'];

const TasksPage = () => {
	const [cardForm, showCardForm] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const onChangeTitle = e => {
		setTitle(e.target.value);
	};

	const onDescriptionChange = e => {
		setDescription(e.target.value);
	};

	const formToggler = () => {
		showCardForm(!cardForm);
  };
  
  const renderTasksLists=()=>{

  }

	return (
		<div className="container my-5">
			<div className="jumbotron py-3">
				<div className="row">
					<div className="col-md-2">
						<button className="btn btn-success m-3" onClick={formToggler}>
							+
						</button>
					</div>
					<div className="col-md-10">
						<h2 className="display-4 text-center text-uppercase">
							Project Tracker
						</h2>
					</div>
				</div>

				{/* form */}
				{cardForm && (
					<form>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Task Title"
								onChange={onChangeTitle}
							/>
						</div>
						<div className="form-group">
							<textarea
								type="text"
								className="form-control"
								placeholder="Task Description"
								onChange={onDescriptionChange}
							></textarea>
						</div>
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default TasksPage;
