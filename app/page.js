import Link from 'next/link' //The Link component serves as an alternative to using anchor tags <a> for client-side navigation.
import StudentInfo from './week2/studentInfo'

export default function Home() {
  return (
    <main>
      <h1><b>CPRG306: Web Development 2 - Assignments</b></h1>
      <StudentInfo/>
      <Link href="/week2"><u>Week 2</u></Link>
      <br></br>
      <Link href="/week3"><u>Week 3</u></Link>
      <br></br>
      <Link href="/week4"><u>Week 4</u></Link>
      <br></br>
      <Link href="/week5"><u>Week 5</u></Link>
      <br></br>
      <Link href="/week6"><u>Week 6</u></Link>
      <br></br>
      <Link href="/week7"><u>Week 7</u></Link>
      <br></br>
      <Link href="/week8"><u>Week 8</u></Link>
      <br></br>
      <Link href="/week10"><u>Week 10</u></Link>
    </main>
  )
} 
