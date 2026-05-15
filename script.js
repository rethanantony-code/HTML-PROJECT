const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        studentList.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>

                <td>
                    <button class="edit" onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button class="delete" onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    localStorage.setItem("students", JSON.stringify(students));
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    students.push({
        name,
        age,
        course
    });

    form.reset();

    displayStudents();
});

function deleteStudent(index){

    students.splice(index, 1);

    displayStudents();
}

function editStudent(index){

    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;

    students.splice(index, 1);

    displayStudents();
}

displayStudents();