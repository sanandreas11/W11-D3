import { FaTrash } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Favourites = () => {
  const faves = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()

  return (
    <>
      {faves?.length === 0 && (
        <h1>Anche se non vuoi lavorare purtroppo hai bisogno di soldi</h1>
      )}
      {faves?.map((data, i) => (
        <Row
          key={i}
          className="mx-0 mt-3 p-3"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
          <Col xs={2}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Col>
          <Col xs={7}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
          <Col xs={3}>
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_FAVES",
                  payload: i,
                })
              }}
            >
              <FaTrash />
            </Button>
          </Col>
        </Row>
      ))}
      <Row>
        <Col className="mt-3">
          <Link to="/">Torna alla home</Link>
        </Col>
      </Row>
    </>
  )
}

export default Favourites
