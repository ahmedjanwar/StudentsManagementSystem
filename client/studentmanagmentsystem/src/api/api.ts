const MAIN_URL = 'http://localhost:8080';
const BASE_URL = 'http://localhost:8080/api'

const fetchData = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

// Students API
export const fetchStudents = async (id?: number) => {
  const url = id ? `${BASE_URL}/students/${id}` : `${BASE_URL}/students`;
  return fetchData(url);
};

export const addStudent = async (studentData: any) => {
  const url = `${BASE_URL}/students`;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  };

  return fetchData(url, options);
};

export const updateStudent = async (id: number, studentData: any) => {
  const url = `${BASE_URL}/students/${id}`;
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  };

  return fetchData(url, options);
};

export const deleteStudent = async (id: number) => {
  const url = `${BASE_URL}/students/${id}`;
  const options: RequestInit = {
    method: 'DELETE',
  };

  return fetchData(url, options);
};

// Courses API
export const fetchCourses = async (id?: number) => {
  const url = id ? `${BASE_URL}/courses/${id}` : `${BASE_URL}/courses`;
  return fetchData(url);
};

export const addCourse = async (courseData: any) => {
  const url = `${BASE_URL}/courses`;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  };

  return fetchData(url, options);
};

export const updateCourse = async (id: number, courseData: any) => {
  const url = `${BASE_URL}/courses/${id}`;
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  };

  return fetchData(url, options);
};

export const deleteCourse = async (id: number) => {
  const url = `${BASE_URL}/courses/${id}`;
  const options: RequestInit = {
    method: 'DELETE',
  };

  return fetchData(url, options);
};

// Enrollments API
export const fetchEnrollments = async (studentId?: number, courseId?: number) => {
  const url = studentId && courseId
    ? `${BASE_URL}/enrollments?studentId=${studentId}&courseId=${courseId}`
    : `${BASE_URL}/enrollments`;

  return fetchData(url);
};

export const addEnrollment = async (enrollmentData: any) => {
  const url = `${BASE_URL}/enrollments/enroll`;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(enrollmentData),
  };

  return fetchData(url, options);
};

export const deleteEnrollment = async (studentId: number, courseId: number) => {
  const url = `${BASE_URL}/enrollments?studentId=${studentId}&courseId=${courseId}`;
  const options: RequestInit = {
    method: 'DELETE',
  };

  return fetchData(url, options);
};

// Users API
export const fetchUsers = async (id?: number) => {
  const url = id ? `${BASE_URL}/users/${id}` : `${BASE_URL}/users`;
  return fetchData(url);
};

export const registerUser = async (userData: any) => {
  const url = `${BASE_URL}/users/register`;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  return fetchData(url, options);
};

export const loginUser = async (userData: any) => {
  const url = `${MAIN_URL}/login`;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };
  return fetchData(url, options);
};
