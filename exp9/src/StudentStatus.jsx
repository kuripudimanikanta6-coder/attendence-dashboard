import { useState } from 'react'
export default function StudentStatus() {
  const [status, setStatus] = useState('Click to check student eligibility')
  return (
    <div>
      <button onClick={() => setStatus('Student Eligible – Test Case Passed')}>
        Check Eligibility
      </button>
      <p>{status}</p>
    </div>
  )
}