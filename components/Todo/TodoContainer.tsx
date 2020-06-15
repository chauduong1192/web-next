import { connect } from 'react-redux';

import { fetchTodo } from '@redux/todo/actions';

import { Todo } from './Todo';

export const mapStateToProps = state => ({
  isFetching: state.todo.isFetching,
  isError: state.todo.isError,
  list: state.todo.list,
});

const mapDispatchToProps = {
  fetchTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
