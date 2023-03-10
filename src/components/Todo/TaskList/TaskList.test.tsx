import React from 'react'
import { render, screen } from '@testing-library/react'
import { TaskList } from './TaskList'

test('check filter', () => {
  render(
    <TaskList
      list={[{ id: '1', name: 'task1', priority: 'regular' }]}
      handleAction={() => null}
    />
  )
  const item = screen.getByTestId('filter')
  expect(item).toBeInTheDocument()
})
