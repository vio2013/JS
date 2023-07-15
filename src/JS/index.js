function pow(x, n)
{
    if (n === 1) {
        return x;
    }
    else {
        return x * pow(x, n-1);
    }
}


console.log(pow(2,18));

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
        }],
        semi: {
            students: [
                {
                    name: 'Test',
                    progress: 100 ,
                }
            ]
        }
    }
}
function getTotalProgresssByIteration(data) {
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

} console.log(getTotalProgresssByIteration(students));

function getTotalProgresssByRecursion (data) {
    if (Array.isArray(data)) {
        let total = 0
       
        for (let i = 0; i<data.length; i++)
        {total += data[i].progress;}
        return  [total, data.length]
}
else 
{
    let total = [0, 0];
    for(let subData of Object.values(data)){
        const subDataArr = getTotalProgresssByRecursion(subData);
        total[0] += subDataArr[0];
        total[1] += subDataArr[1];
    }
return total
}
}
const result = getTotalProgresssByRecursion(students);
console.log(result[0]/result[1])