import React, { useEffect } from 'react'
import { IBasicComponentProps } from '@components/Types'

import { IToDo } from '@api/todo/type'

interface ITodoProps extends IBasicComponentProps {
  fetchTodo: () => void
  isFetching: boolean
  isError: boolean
  list: IToDo[]
}

const Todo = (props: ITodoProps) => {
  useEffect(() => {
    props.fetchTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isFetching, list } = props
  if (isFetching) {
    return <>.... Loading todo .......</>
  }

  return (
    <>
      {list.map((l) => (
        <div key={l.id}>{l.title}</div>
      ))}
    </>
  )
}

Todo.defaultProps = {
  list: [],
}

export { Todo }
