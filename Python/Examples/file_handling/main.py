print('--- Current grades ---')

with open('grades.txt', 'r') as reader:
    all_data = reader.read()
    print(all_data)

new_grades = []

yes_no_new_grades = input('Do you want to add new grades? ')

if yes_no_new_grades == 'yes':
    while True:
        name = input('Enter name: ')

        if name == 'exit':
            break

        grade = input('Enter grader: ')
        new_grades.append({
            'name': name,
            'grade': int(grade),
        })

with open('grades.txt', 'a') as grades_file:
    for student_grade in new_grades:
        grades_file.write(
            f"{student_grade['name']} {student_grade['grade']}\n")


all_students_grades = []
with open('grades.txt', 'r') as reader:
    all_data = reader.read()
    for line in all_data.split('\n'):
        if len(line) > 1:
            grade = line.split(' ')[1]
            all_students_grades.append(grade)

print(all_students_grades)
