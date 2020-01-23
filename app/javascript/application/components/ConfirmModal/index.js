import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap'

const ConfirmModal = props => (
  <Modal isOpen={props.open} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>
      Are you sure to perform this action?
    </ModalHeader>
    <ModalFooter>
      <Button color="primary" onClick={props.onAction} className="px-3">OK</Button>
      <Button onClick={props.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
)

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
}

export default ConfirmModal
