// import React from 'react'
// import Alert from 'react-bootstrap/Alert'
// import {useCartContext} from '../../Context/cartContext'
// import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// const AlertCart = ({cantidad,nombre}) => {

//   const {show, handleShow} = useCartContext()

//     return(
//             <React.Fragment>
//               <Alert show={!show} variant="success">
//                 <Alert.Heading>Felicitaciones!</Alert.Heading>
//                 <p>
//                   Agregaste {cantidad} vinos {nombre} a tu carrito!
//                 </p>
//                 <hr />
//                 <div className="d-flex justify-content-center">
//                   <Link to='/'>
//                     <Button variant="outline-info">
//                       Continuar comprando
//                     </Button>
//                   </Link>
//                   <Link to='/cart'>
//                     <Button variant="outline-danger">
//                       Finalizar compra
//                     </Button>
//                   </Link>
//                 </div>
//               </Alert>
//             </React.Fragment>
//     )
// }

// export default AlertCart



export default function AlertCart({cantidad,nombre}) {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Agregaste {cantidad} vinos {nombre} al carrito!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Seguir comprando
          </Button>
          <Link to='/cart'>
            <Button onClick={handleClose} color="primary" autoFocus>
              Finalizar compra
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}