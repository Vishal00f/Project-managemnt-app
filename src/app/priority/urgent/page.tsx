import React from 'react'
import ReusablePriorityPage from '../reusablePriorityPages'
import { Priority } from '@/state/api'

type Props = {}

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent}/>
  
}

export default Urgent