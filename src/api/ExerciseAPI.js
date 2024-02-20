import axios from "axios";

export const fetchExerciseList = async (userId) => {
  const GET_EXERCISE_LIST_API = `${process.env.REACT_APP_BACKEND_API_URL}/getexerciselist/${userId}`;
  try {
    const response = await axios.get(GET_EXERCISE_LIST_API);
    if (response.data === null)
      return [];
    return response.data;
  } catch (err) {
    alert(err.name + ":" + err.message);
    return [];
  }
}

export const deleteExerciseOne = async (exerciseId) => {
  const DELETE_EXERCISE_API = `${process.env.REACT_APP_BACKEND_API_URL}/deleteexercise/${exerciseId}`;
  try {
    const response = await axios.delete(DELETE_EXERCISE_API);
    if (response.data.message === "Exercise not found") alert(response.data.message);
    alert(response.data.message);
  } catch (error) {
    alert(error.name + ":" + error.message)
  }
}

export const fetchExerciseOne = () => {
  
}