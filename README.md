# Student Management System

## 1. Introduction
this is final project for Java Server Programming Course, developing a simple student and course management system using Java Spring.

## 2. Requirements
### a. Basic Requirements
The project will include REST API for user authentication and managing students and courses. Only authorized users can edit and add student and course data. Others can view the list of students and courses, as well as search them by ID.

### b. Bonus Requirements
- Create a user interface using ReactJS.
- Provide REST API to list all the students who joined a course.
- Implement user registration with a username and password.
- Save users' passwords in Hash format.


## 3. Database
### Snippet 1. Student and Course Diagram
Note: The `studentJoinCourse` table shows relationships between students and courses for bonus requirements.
<img width="452" alt="image" src="https://github.com/ahmedjanwar/StudentsManagementSystem/assets/57673382/a5bd1c3a-2662-4ab8-b7c9-13a7e1e67b1b">

### Snippet 2. Authentication Database

## 4. Use Case Diagrams
### a. Authentication API
#### Snippet 3. Authentication Use Case Diagrams
- Users can register with a new username and password.
- Users can log in using a username and password.
  <img width="452" alt="image" src="https://github.com/ahmedjanwar/StudentsManagementSystem/assets/57673382/c75c5471-8062-4ff8-af9a-b89548cf8059">


### b. Student / Course API
#### Snippet 4. Student and Course Use Case Diagram
- Any users can view courses and students' data.
- Only authorized users can update courses and students' data, including adding, modifying, and deleting data.

<img width="452" alt="image" src="https://github.com/ahmedjanwar/StudentsManagementSystem/assets/57673382/b1211d40-3ba1-409c-847c-059e578f8b5a">

## 5. API Lists
### a. Student API
- GET /students: Return the list of all students.
- AUTH POST /students: Add a new student to the database (JSON in the request body).
- GET /students/{id}: Get one student by ID.
- AUTH PUT /students/{id}: Update one student by ID.
- AUTH DELETE /students/{id}: Delete one student by ID.

### b. Course API
- GET /courses: Return the list of all courses.
- AUTH POST /courses: Add a new course to the database (JSON in the request body).
- GET /courses/{id}: Get one course by ID (bonus: return a list of all students joined this course).
- AUTH PUT /courses/{id}: Update one course by ID.
- AUTH DELETE /students/{id}: Delete one course by ID.

### c. Authentication API
- POST /register: Register a new user with a username and password (JSON in the request).
- POST /login: Check the username and password; if correct, return a JWT token.
