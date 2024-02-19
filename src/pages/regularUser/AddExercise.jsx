import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AddExercise = () => {

  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState("");
  const [exerciseDate, setExerciseDate] = useState("");
  const { isLoggedIn } = useAuth();
  const userId = isLoggedIn;

  const navigate = useNavigate();

  const onClickAddExercise = async () => {
    if (exerciseName === "" || exerciseDuration === "" || exerciseDate === "") {
      alert("Please Input All!")
    } else {
      try {
        const result = await axios.post("http://localhost:3001/addexercise", { userId, exerciseName, exerciseDuration, exerciseDate })
        console.log(result.data);
        navigate("/exercise")      
      } catch (err) { alert(err.name + ":" + err.message) }
    }
  }

  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <div className="">
        <input type="text"
          placeholder='Name'
          autoComplete='off'
          name='name'
          value={exerciseName}
          className='form-control rounded-0'
          onChange={e => { setExerciseName(e.target.value) }}
          required
        />
      </div>
      <div className="">
        <input type="text"
          placeholder='Duration'
          autoComplete='off'
          name='duration'
          value={exerciseDuration}
          onChange={e => {setExerciseDuration(e.target.value)}}
          className='form-control rounded-0'
          required
        />
      </div>
      <div className="">
        <input type="text"
          placeholder="Date"
          name='date'
          value={exerciseDate}
          onFocus={(e) => {e.target.type = "date"}}
          onBlur={(e) => { e.target.type = "text" }}
          onChange={e => {setExerciseDate(e.target.value)}}
          className='form-control rounded-0'
          required
        />
      </div>
      <button className="btn btn-success w-30 rounded-0" onClick={onClickAddExercise}>
        Add Exercise
      </button>
    </div>
  )
}

export default AddExercise;
