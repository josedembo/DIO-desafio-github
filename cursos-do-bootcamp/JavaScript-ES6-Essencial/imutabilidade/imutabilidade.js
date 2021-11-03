const students = [
    {
        name: "josé",
        grade: "6"

    },
    {
        name: "Carlos",
        grade: "10"

    },
    {
        name: "Milton",
        grade: "2"

    },
    {
        name: "Fernanda ",
        grade: "5"

    },
];

function getAprovedStudents(listStudents) {
    return listStudents.filter((student) => student.grade >= 7);
}

console.log(getAprovedStudents(students));