import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes'

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    })
}

export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses
        })
    })
}

export function deleteCourse(course_id) {
    return courseApi.deleteCourse(course_id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            course_id
        })
    })
}