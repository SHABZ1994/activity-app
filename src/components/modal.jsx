import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { toggleModalAction } from "../redux/actions/actions";
import Calender from "./calender";
import "../styles/styles.css";

Modal.setAppElement("#root");

const ModalComponent = props => {
  let [member] = props.member;

  function closeModal() {
    props.toggleModal();
  }

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={closeModal}
        contentLabel="View Activity"
      >
        {member ? (
          <div>
            <h3>{member["real_name"]}</h3>
            <h3>{member["tz"]}</h3>
            <hr />
            <Calender />
          </div>
        ) : null}
        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ isOpen, member }) => ({
  isOpen,
  member
});
const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
