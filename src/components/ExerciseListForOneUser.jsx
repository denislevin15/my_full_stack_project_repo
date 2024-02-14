import { useEffect, useState } from "react";
import axios from "axios";

const ExerciseListForOneUser = () => {
  const [exerciseLists, setExerciseLists] = useState([]);
  useEffect(() => {
    const fetchExerciseList = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getexerciselist');
        setExerciseLists(response.data);
      } catch (err) {
        console.error(err.name + ":" + err.message)
      }
    }
    fetchExerciseList();
  }, [])
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
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
                <td>
                  <button>delete</button>
                  <button>edit</button>
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