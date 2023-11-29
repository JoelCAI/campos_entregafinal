import './list.css';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { useTodo } from '../logic/useTodo';

function List() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		todosComplete,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
		<div className='task__container'>
			<div className='card-to-do m-5'>
				<h1>Lista de tareas</h1>
				<div className='counter-todos'>
					<h3>
						Completadas: <span className='task__colorComplete'>{todosComplete}</span>
					</h3>
					<h3>
						Totales: <span className='task__colorTotal'>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span className='task__colorPending'>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Puede Agregar, Completar, Editar o Eliminar sus tareas</h3>
					<TaskForm handleNewTodo={handleNewTodo} />
				</div>

				<TaskList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
		</div>
			
		</>
	);
}

export default List;