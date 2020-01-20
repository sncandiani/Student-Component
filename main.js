/* const createStudentComponent = function() {}
const createStudentComponent = () => {} 
Both are the same thing, one uses arrow function notation and is better practice
const createStudentComponent = () => {
    return `
        <div class="student">
            <h1>Alejandro Font</h1>
            <section>Day cohort 27</section>
            <aside>
                Wore pants that were too short for his legs.
                Was an incredible friend to his teammates.
            </aside>
        </div>
    `
}
Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container")

Update its contents with the return value of the function
studentContainer.innerHTML = createStudentComponent() */

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
/* CreateStudentComponent is the function name
Name subject info are parameters  */


/* for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = 
        `
        <div class="student">
    <h1 class="xx-large passing">${student.name}</h1>
    <section class="bordered dashed section--padded">${student.subject}</section>
    <aside class="pushRight">${student.info}</aside>
    </div>
`

    } else {
        studentComponent =
        `
        <div class="student">
    <h1 class="xx-large failing">${student.name}</h1>
    <section class="bordered dashed section--padded">${student.subject}</section>
    <aside class="pushRight">${student.info}</aside>
    </div>
`

    }
    studentContainer.innerHTML += studentComponent
    
}

 */
/* Instead of defining four arguments for the createStudentComponent function, and then 
passing the individual properties when it is invoked, refactor the function to 
accept the entire object as a single argument.
Then refactor your string interpolation code to use the object properties. */
const studentContainer = document.querySelector("#container")


const createStudentComponent = (studentObject) => {
    return `
        <div class="student ${studentObject.score < 60 ? 'failing' : ''}">
            <h1>${studentObject.name}</h1>
            <section>${studentObject.subject}</section>
            <aside>${studentObject.info}</aside>
        </div>
    `
}

for (const student of students) {
    const studentInfo = createStudentComponent(student)
    studentContainer.innerHTML += studentInfo
}


/* for (let i = 0; i < students.length; i++) {

    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info, 
        student.score
    )
}
 */