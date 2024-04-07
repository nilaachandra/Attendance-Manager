import React from 'react'
import {SignedIn} from '@clerk/clerk-react'
const Dashboard = () => {
  return (
    <SignedIn>
      <div>Dashboard</div>
    </SignedIn>
  )
}

export default Dashboard