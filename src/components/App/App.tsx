import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import Votes, {Vote} from '../../types/votes'
import { useState } from 'react'


export default function App() {
  const [votesState, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  return <div className={css.app}>
    <CafeInfo/>
  </div>
}