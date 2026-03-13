import { render, screen, fireEvent } from '@testing-library/react'
import StudentStatus from './StudentStatus'
import '@testing-library/jest-dom'

/* Test Case 1: Component renders correctly */
test('renders StudentStatus component', () => {
  render(<StudentStatus />)
  expect(
    screen.getByText(/click to check student eligibility/i)
  ).toBeInTheDocument()
})

/* Test Case 2: Button is visible */
test('check eligibility button is present', () => {
  render(<StudentStatus />)
  expect(
    screen.getByText('Check Eligibility')
  ).toBeInTheDocument()
})

/* Test Case 3: Initial message is displayed before click */
test('initial eligibility message is shown', () => {
  render(<StudentStatus />)
  expect(
    screen.getByText('Click to check student eligibility')
  ).toBeInTheDocument()
})

/* Test Case 4: Message updates after button click */
test('student eligibility status updates after button click', () => {
  render(<StudentStatus />)

  fireEvent.click(screen.getByText('Check Eligibility'))

  expect(
    screen.getByText(/student eligible/i)
  ).toBeInTheDocument()
})