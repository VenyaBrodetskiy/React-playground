import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudentsArray } from "../../services/student.service";
import { IStudent } from './../../services/student.service';

export function StudentsPage() {
    const [students, setStudents] = useState<IStudent[]>([]);
    
    useEffect(() => {
        let students = getStudentsArray();
        setStudents(students);
    }, []);
    return (
        <div>
            {students.map((student) => {
                return <StudentCard student={student} />
            })}
        </div>);
}

function StudentCard({ student }: { student: IStudent}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ student.name }</h5>
                <h5 className="card-title">{ "Age: " + student.age }</h5>
                <p className="card-text">{student.id}</p>
                <li className="nav-item">
                    <Link to={"/student/" + student.id} className="nav-link active">About</Link>
                </li>
            </div>
        </div>
    )
}