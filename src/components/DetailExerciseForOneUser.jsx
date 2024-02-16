import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailExerciseForOneUser = () => {

  const params = useParams()
  const { exerciseId } = params;
  const [detailedInfor, setDetailedInfor] = useState({});

  const fetchExerciseOne = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/getexerciseone/?exerciseId=${exerciseId}`)
      setDetailedInfor(response.data);
    } catch (err) {
      console.log(err.name + ":" + err.message)
    }
  }, [exerciseId])
    
  useEffect(() => {
    fetchExerciseOne();
  }, [fetchExerciseOne])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25 border bordered shadow">
        <h2><center>Edit Exercise</center></h2>

        <form>
          <div className="mb-3">
            <label htmlFor="exerciseName">
              <strong>Exercise Name</strong>
            </label>
            <input type="text"
              autoComplete='off'
              name='exerciseName'
              className='form-control rounded-0'
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
              className='form-control rounded-0'
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exerciseDate">
              <strong>Exercise Date</strong>
            </label>
            <input type="text"
              name='exerciseDate'
              className='form-control rounded-0'
              required
            />
          </div>
          <button type = "submit" className="btn btn-success w-100 rounded-0">
            Edit
          </button>
        </form>
        <hr />
        <Link to="/exercise" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Save
        </Link>
      </div>
    </div>
  )
}

export default DetailExerciseForOneUser;