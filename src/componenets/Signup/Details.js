import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Details = () => {

  const [logindata, setLoginData] = useState([]);


  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);


      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000)
      }
    }
  }

  const userlogout = () => {
    localStorage.removeItem("user_login")
    history("/");
  }

  useEffect(() => {
    Birthday();
  }, [])

  return (
    <>
      {
        logindata.length === 0 ? "errror" :
          <>
            <h1 className='m-20 '>Details page</h1>
            <h1>username :{logindata[0].name}</h1>
            <h2>email id :{logindata[0].email}</h2>
            <h2> password :{logindata[0].password}</h2>
            <h2>DOB :{logindata[0].date}</h2>
            <Button onClick={userlogout}>LogOut</Button>

            {
              logindata[0].date === todayDate ?
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal> : ""
            }

          </>
      }
    </>
  )
}

export default Details