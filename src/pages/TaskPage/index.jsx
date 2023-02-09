import React from 'react'
import TaskList from '../../components/TaskList'
import TaskForm from '../../components/forms/TaskForm'

function TaskPage () {
  return (
    <section>
      <TaskForm />
      <TaskList />
    </section>
  )
}

export default TaskPage
