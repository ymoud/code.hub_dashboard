import axios from "axios";

class Services {
  static apiUrl = "http://localhost:3000";
  static coursesPath = "courses";
  static instructorspath = "instructors";
  static statsPath = "stats";

  static getCourses() {
    return axios.get(`${Services.apiUrl}/${Services.coursesPath}`);
  }

  static getCourse(courseId) {
    return axios.get(`${Services.apiUrl}/${Services.coursesPath}/${courseId}`);
  }

  static deleteCourse(courseId) {
    return axios.delete(`${Services.apiUrl}/${Services.coursesPath}/${courseId}`);
  }

  static getStats() {
    return axios.get(`${Services.apiUrl}/${Services.statsPath}`);
  }

  static getInstructors() {
    return axios.get(`${Services.apiUrl}/${Services.instructorspath}`);
  }

  static getIntructor(instructorId) {
    return axios.get(`${Services.apiUrl}/${Services.instructorspath}/${instructorId}`);
  }

  static createCourse(course) {
    return axios.post(`${Services.apiUrl}/${Services.coursesPath}`, course);
  }
}

export default Services;