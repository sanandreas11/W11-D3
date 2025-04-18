export const ADD_TO_FAVES = "ADD_TO_FAVES"
export const REMOVE_FROM_FAVES = "REMOVE_FROM_FAVES"
export const FETCH_JOBS = "FETCH_JOBS"
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR"
export { useParams } from "react-router"

export const addToFavesAction = (jobSelected) => {
  return {
    type: ADD_TO_FAVES,
    payload: jobSelected,
  }
}

export const removeFromFavesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVES,
    payload: i,
  }
}

export const searchJobsAction = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  return async (dispatch) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?company="

    useEffect(() => {
      getJobs()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getJobs = async (data) => {
      try {
        const response = await fetch(baseEndpoint + params.company)
        if (response.ok) {
          const { data } = await response.json()
          setJobs(data)
        } else {
          alert("Error fetching results")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
