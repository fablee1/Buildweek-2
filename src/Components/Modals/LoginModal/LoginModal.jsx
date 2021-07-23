import { Modal, Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { BACKEND_URL } from "../../../env.js"

const LoginModal = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [register, setRegister] = useState(false)

  const getAllUsers = async () => {
    const response = await fetch(BACKEND_URL + "/profiles")
    if (response.ok) {
      const data = await response.json()
      setUsers(data)
    } else {
      console.log("error getting users")
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const selectUser = (id) => {
    setSelectedUser(id)
  }

  const submitForm = (e) => {
    e.preventDefault()
    localStorage.setItem("myId", selectedUser)
    setLoggedIn(true)
    props.close()
  }

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Log In To Strive Linked In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-2">
          <strong>Please choose the user you want to be</strong>
        </div>
        <Form className="d-flex flex-column" onSubmit={(e) => submitForm(e)}>
          <select onChange={(e) => selectUser(e.target.value)} className="py-2">
            <option>Choose User</option>
            {users.length !== 0 &&
              users.map((u) => (
                <option value={u._id}>
                  {u.name} {u.surname}
                </option>
              ))}
          </select>
          <Button variant="primary" type="submit" className="w-100 mt-2">
            Log In
          </Button>
          <div className="text-center my-3">OR CLICK REGISTER</div>
          <Button
            variant="primary"
            onClick={() => {
              setRegister(true)
              props.close()
            }}
            className="w-100 mt-2">
            Register
          </Button>
          {loggedIn && <Redirect to="/me" />}
          {register && <Redirect to="/register" />}
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal
