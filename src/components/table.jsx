import React from "react";
import {
  fetchDataAction,
  toggleModalAction,
  setMemberAction
} from "../redux/actions/actions";
import { connect } from "react-redux";
import "../styles/styles.css";

class Table extends React.Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  handleClick = e => {
    console.log(e.target.id);

    this.props.toggleModal();
    this.props.setCurrentMember(e.target.id);
  };
  render() {
    const { members } = this.props;
    return (
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.real_name}</td>
                <td>{member.tz}</td>
                <td>
                  <button
                    onClick={this.handleClick}
                    id={member.id}
                    className="view-button"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.data
});
const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchDataAction()),
  toggleModal: () => dispatch(toggleModalAction()),
  setCurrentMember: member_id => dispatch(setMemberAction(member_id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
