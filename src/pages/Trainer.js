import React from 'react'
import backImage from '../assets/interior.jpg'
import '../styles/Trainer.css'
import useState from 'react-hook-use-state';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Trainer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    
      <div className='hometr'>  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ERRRRRRORS</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, rong choise </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='header'>
      <h1  > Nos DOctORs </h1>
      <p> Professionnels diplômés d’État, d'une grande expérience et certifiés </p>
      </div>
      <section className="trainers" >
       <div className='flex-box' >
         <div className='section-1'  >
        <p className='description' >jeRRY</p>
        <button className='btn-trainers'  onClick={handleShow} >
          Pick
        </button>
         </div>
         <div className='section-2' >
           <p className='description' >MICKEL</p>
           <button className='btn-trainers'  onClick={handleShow} >
             Pick
           </button>
         </div>
         <div className='section-3' >
           <p className='description' >FIRI</p>
           <button className='btn-trainers'  onClick={handleShow} >
             Pick
           </button>
         </div>

       </div>
      </section>
      </div>
    )
  }
export default Trainer
