import Link from "next/link";

export default function StudentInfo() {
  return (
      <div>
        <br></br>
        <h1><b>Student Info</b></h1>
        <p>Student Name: Felix Cheung</p>
        <p>Course Section: CPRG306-B</p>
        <br></br>
        <p><b>Check out my Github Repository.</b></p>
        <Link href="https://github.com/manho0107?tab=repositories"><u>My GitHub Repository</u></Link>
      </div>
  );
}
