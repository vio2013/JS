function pow(x: number, n: number): number
{
    if (n === 1) {
        return x;
    }
    else {
        return x * pow(x, n-1);
    }
}


console.log(pow(2,18))

let students = {
    js: [
            {
                name: 'John',
                progress: 20
            },
            {
                name: 'Jan',
                progress: 120
            }
    ],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },
        {
            name: 'Ann',
            progress: 120
        }], 
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
}
function getTotalProgresssByIteration(data: any) {
    let total = 0;
   let students = 0;

        for (let course of Object.values(data))
        {
            if (Array.isArray(course)) {
                students += course.length;
                for (let i = 0; i<course.length; i++)
                total += course[i].progress;
            } else { for (let subCourse of Object.values(course)) {
                    students += subCourse.length;
                    for (let i = 0; i<subCourse.length; i++)
                    total += subCourse[i].progress;
            }

            }
        } 
    return total/students;

} console.log(getTotalProgresssByIteration(students))