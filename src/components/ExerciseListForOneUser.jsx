import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchExerciseList, deleteExerciseOne } from "../api/ExerciseAPI";

const ExerciseListForOneUser = () => {

  const { isLoggedIn } = useAuth();
  const [exerciseLists, setExerciseLists] = useState([]);
  
  useEffect(() => {
    if (isLoggedIn === "")
      return;
    (async () => {
      const data = await fetchExerciseList(isLoggedIn);
      setExerciseLists(data);
    })();
  
  }, [isLoggedIn])

  const onClickDeleteExercise = useCallback(async (exerciseId) => {
      await deleteExerciseOne(exerciseId);
      
      const data = await fetchExerciseList(isLoggedIn);
      setExerciseLists(data);

  }, [isLoggedIn])

  return (
    <div className="mt-5">
      <table className="table table-bordered text-center fs-4">
        <thead className="thead-dark">
          <tr className="table-active">
            <th scope="col">No</th>
            <th scope="col">Exercise Name</th>
            <th scope="col">Exercise Duration</th>
            <th scope="col">Exercise Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="fs-5">
          {exerciseLists.length === 0 ? (
            <tr><td colSpan={5}>No Data</td></tr>
          ) : (
            exerciseLists.map(
              (exerciseList, index) =>
                <tr key={exerciseList._id}>
                  <td>{index + 1}</td>
                  <td>{ exerciseList.exerciseName}</td>
                  <td>{ exerciseList.exerciseDuration}</td>
                  <td>{exerciseList.exerciseDate.slice(0, 10)}</td>
                  <td className="d-flex gap-3">
                    <Link className="btn btn-primary w-100 rounded-0" to={`/exercise/${exerciseList._id}/edit`}>Edit</Link>
                    <button className="btn btn-danger w-100 rounded-0" onClick={() => onClickDeleteExercise(exerciseList._id)}>delete</button>
                  </td>
                </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseListForOneUser;