import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditExerciseForOneUser = () => {

  const params = useParams()
  const { exerciseId } = params;
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState("");
  const [exerciseDate, setExerciseDate] = useState("");

  const navigate = useNavigate();

  const fetchExerciseOne = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/getexerciseone/?exerciseId=${exerciseId}`)
      setExerciseName(response.data.exerciseName);
      setExerciseDuration(response.data.exerciseDuration);
      setExerciseDate(response.data.exerciseDate);
    } catch (err) {
      alert(err.name + ":" + err.message)
    }
  }, [exerciseId])
    
  useEffect(() => {
    fetchExerciseOne();
  }, [fetchExerciseOne])


  const onClickUpdate = useCallback(async () => {
    try {
      const response = await axios.put(`http://localhost:3001/updateexercise/?exerciseId=${exerciseId}`, { exerciseName, exerciseDuration, exerciseDate })
      if (response.data === "Exercise not found")
      {
        alert(response.data);
      }
      else {navigate("/exercise")}
    } catch (error) {
      alert(error.name + ":" + error.message)
    }
  }, [exerciseDate, exerciseDuration, exerciseId, exerciseName, navigate])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25 border bordered shadow">
        <h2><center>Edit Exercise</center></h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}>
          <div className="mb-3">
            <label htmlFor="exerciseName">
              <strong>Exercise Name</strong>
            </label>
            <input type="text"
              autoComplete='off'
              name='exerciseName'
              value={exerciseName}
              className='form-control rounded-0'
              onChange={(e) => setExerciseName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exerciseDuration">
              <strong>Exercise Duration</strong>
            </label>
            <input type="text"
              autoComplete='off'
              name='exerciseDuration'
              value={exerciseDuration}
              className='form-control rounded-0'
              onChange={e => setExerciseDuration(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exerciseDate">
              <strong>Exercise Date</strong>
            </label>
            <input type="date"
              name='exerciseDate'
              value={exerciseDate.slice(0, 10)}
              className='form-control rounded-0'
              onChange={e => setExerciseDate(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success w-100 rounded-0" onClick={onClickUpdate}>
            Update
          </button>
        </form>
        <hr />
        <Link to="/exercise" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Go to back
        </Link>
      </div>
    </div>
  )
}

export default EditExerciseForOneUser;