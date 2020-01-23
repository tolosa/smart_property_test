import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from 'reactstrap'
import './style.css'

const ConfirmModal = props => (
  <Modal isOpen={props.open} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>
      Are you sure to perform this action?
    </ModalHeader>
    <ModalBody>
      <div className="button-panel">
        <Button color="primary" onClick={props.onAction}>Ok</Button>
        <Button onClick={props.toggle}>Cancel</Button>
      </div>
    </ModalBody>
  </Modal>
)

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
}

export default ConfirmModal
