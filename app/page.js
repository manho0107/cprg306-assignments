import Link from 'next/link' //The Link component serves as an alternative to using anchor tags <a> for client-side navigation.
import StudentInfo from './week2/studentInfo'

export default function Home() {
  return (
    <main>
      <h1><b>CPRG306: Web Development 2 - Assignments</b></h1>
      <StudentInfo/>
      <Link href="/week2"><u>Week 2</u></Link>
    </main>
  )
} 
