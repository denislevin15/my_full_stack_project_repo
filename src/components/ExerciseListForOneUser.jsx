import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const ExerciseListForOneUser = () => {

  const [exerciseLists, setExerciseLists] = useState([]);
  const fetchExerciseList = useCallback(async () => {
      try {
        const response = await axios.get('http://localhost:3001/getexerciselist');
        setExerciseLists(response.data);
      } catch (err) {
        console.error(err.name + ":" + err.message)
      }
  }, [])
  
  useEffect(() => {
    fetchExerciseList();
  }, [fetchExerciseList])

  const onClickDeleteExercise = useCallback(async (exerciseId) => {
    const response = await axios.delete(`http://localhost:3001/deleteexercise/${exerciseId}`);
    alert(response.data.message);
    fetchExerciseList()
  }, [fetchExerciseList])

  const onClickEdit = () => {

  }
  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr className="table-active">
            <th scope="col">No</th>
            <th scope="col">Exercise Name</th>
            <th scope="col">Exercise Duration</th>
            <th scope="col">Exercise Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            exerciseLists.map((exerciseList, index) =>
              <tr key={exerciseList._id}>
                <td>{index + 1}</td>
                <td>{ exerciseList.exerciseName}</td>
                <td>{ exerciseList.exerciseDuration}</td>
                <td>{exerciseList.exerciseDate}</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-primary w-100 rounded-0" onClick={onClickEdit}>edit</button>
                  <button className="btn btn-danger w-100 rounded-0" onClick={() => onClickDeleteExercise(exerciseList._id)}>delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseListForOneUser;