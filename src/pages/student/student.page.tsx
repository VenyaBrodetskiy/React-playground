import React from "react";
import { useParams } from "react-router-dom";

export function StudentPage() {
    const { id } = useParams();
    return (
        <div>
            Student Page {id}
            
        </div>);
}
