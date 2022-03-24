import React, {useState} from 'react';
import {Button,Modal,} from 'react-bootstrap';

const Add = (addMovie) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [posterUrl, setPosterUrl] = useState()
  const [rate, setRate] = useState()

  const handlAdd =() => {
    addMovie({title,description,posterUrl,rate})
    handleClose();
  }
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor='title'>title</label>
          <input type="text" placeholder='enter title here' onChange={(e)=>setTitle(e.target.value)} />
          <label htmlFor='description'>description</label>
          <input type="text" placeholder='enter description here' onChange={(e)=>setDescription(e.target.value)} />
          <label htmlFor='posterUrl'>posterUrl</label>
          <input type="text" placeholder='enter posterUrl here' onChange={(e)=>setPosterUrl(e.target.value)} />
          <label htmlFor='rate'>rate</label>
          <input type="text" placeholder='enter rate here' onChange={(e)=>setRate(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlAdd}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  );
};

export default Add