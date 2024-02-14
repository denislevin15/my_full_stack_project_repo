import { useEffect, useState } from "react";
import axios from "axios";

const ExerciseListForOneUser = () => {
  const [exerciseLists, setExerciseLists] = useState([]);
  useEffect(() => {
    const fetchExerciseList = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getexerciselist');
        setExerciseLists(response);
        console.log(response);
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
            exerciseLists.map((index, exerciseLists) => {
              return (
                <tr>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseListForOneUser;