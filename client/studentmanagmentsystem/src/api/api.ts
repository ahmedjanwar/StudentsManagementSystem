const MAIN_URL = 'http://localhost:8080';
const BASE_URL = 'http://localhost:8080/api'
const LOCAL_URL = 'http://localhost:3000'

// get token 
const getToken = () => {
  return localStorage.getItem('token');
};

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
  const token = getToken();

  if (!token) {
    // Handle the case where the token is not available
    console.error('Token not available');
    return; // or throw an error, redirect to login, etc.
  }

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
    body: JSON.stringify(studentData),
  };

  return fetchData(url, options);
};

export const updateStudent = async (id: number, studentData: any) => {
  const url = `${BASE_URL}/students/${id}`;
  const token = getToken();

  if (!token) {
    // Handle the case where the token is not available
    console.error('Token not available');
    return; // or throw an error, redirect to login, etc.
  }

  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
    body: JSON.stringify(studentData),
  };

  return fetchData(url, options);
};

export const deleteStudent = async (id: number) => {
  const token = getToken();
  
  if (!token) {
    // Handle the case where the token is not available
    console.error('Token not available');
    return; // or throw an error, redirect to login, etc.
  }

  const url = `${BASE_URL}/students/${id}`;
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
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
  const url = id ? `${BASE_URL}/users/${id}` : `${BASE_URL}/users/all`;
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

export const logoutUser = async () =>{
  localStorage.removeItem('token');
}

export const loginUser = async (userData: any) => {
  const url = `${LOCAL_URL}/auth/login`;

  const username = userData[0]
  const password = userData[1]
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username,
        password: password,
      }).toString(),
    });
    if (!response.url.endsWith('error')) {
      console.log('Login successful');
      const token = response.headers.get('Authorization');

      // Save the token to local storage
      if (token !== null) {
      localStorage.setItem('token', token);
      }
      else{console.log("token already exists")}
      //navigate('/students');
      return "ok"
      // Do something after successful login
    } else {
      console.error('Login failed');
      // Handle failed login
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle error
  }
};
