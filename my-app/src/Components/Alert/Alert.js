// import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import {useCartContext} from '../../Context/cartContext'
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

const AlertCart = ({cantidad,nombre}) => {

  const {show} = useCartContext()

    return(
            <React.Fragment>
              <Alert variant="success">
                <Alert.Heading>Felicitaciones!</Alert.Heading>
                <p>
                  Agregaste {cantidad} vinos {nombre} a tu carrito!
                  {console.log(cantidad)}
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                  <Link to='/'>
                    <Button variant="outline-info">
                      Continuar comprando
                    </Button>
                  </Link>
                  <Link to='/cart'>
                    <Button variant="outline-danger">
                      Finalizar compra
                    </Button>
                  </Link>
                </div>
              </Alert>
            </React.Fragment>
    )
}

export default AlertCart



// export default function AlertCart({cantidad,nombre}) {

//   const {show, handleShow} = useCartContext()

//   const [open, setOpen] = useState(false)

//   return (
//     <div>
//       <Dialog
//         show={show}
//         onClose={handleShow}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Agregaste {cantidad} vinos {nombre} al carrito!
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleShow} color="primary">
//             Seguir comprando
//           </Button>
//           <Link to='/cart'>
//             <Button onClick={handleShow} color="primary" autoFocus>
//               Finalizar compra
//             </Button>
//           </Link>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }