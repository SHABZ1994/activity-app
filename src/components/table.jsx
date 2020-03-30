import React from "react";
import {
  fetchDataAction,
  toggleModalAction,
  setMemberAction
} from "../redux/actions/actions";
import { connect } from "react-redux";
import "../styles/styles.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Loader from "react-loader-spinner";

class TableComponent extends React.Component {
  componentDidMount() {
    this.props.fetchMembers();
  }

  handleClick = e => {
    this.props.toggleModal();
    this.props.setCurrentMember(e.target.id);
  };
  render() {
    const { members, loading } = this.props;
    return (
      <Container>
        {loading ? (
          <Loader type="Grid" color="#31a5cc" height={100} width={100} />
        ) : (
          <TableContainer component={Paper}>
            <Table
              size="small"
              aria-label="a dense table"
              className="data-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Location</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map(member => (
                  <TableRow key={member.id}>
                    <TableCell align="left">{member.real_name}</TableCell>
                    <TableCell align="left">{member.tz}</TableCell>
                    <TableCell>
                      <button
                        onClick={this.handleClick}
                        id={member.id}
                        className="view-button"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  members: state.data,
  loading: state.loading
});
const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchDataAction()),
  toggleModal: () => dispatch(toggleModalAction()),
  setCurrentMember: member_id => dispatch(setMemberAction(member_id))
});
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
