import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";
import { useState } from "react";
import { connect } from "react-redux";

const Calender = ({ member }) => {
  let [selectedDate, setSelectedDate] = useState("");
  let [startTime, setStartTime] = useState("N/A");
  let [endTime, setEndTime] = useState("N/A");

  let activity = [];
  let { activity_periods: activities } = member[0];

  const handleDayClick = e => {
    selectedDate = moment(e, "MMM Do YYYY").format("ll");
    activity = [];
    activity = activities.filter(item => {
      let { start_time } = item;
      start_time = moment(start_time, "MMM Do YYYY").format("ll");
      return selectedDate === start_time;
    });

    if (activity.length) {
      let { start_time, end_time } = activity[0];
      start_time = moment(start_time, "MMM Do YYYY h:mm a").format("h:mm a");
      end_time = moment(end_time, "MMM Do YYYY h:mm a").format("h:mm a");
      setStartTime(start_time);
      setEndTime(end_time);
    } else {
      setStartTime("N/A");
      setEndTime("N/A");
    }
    setSelectedDate(selectedDate);
  };

  let selectedDays = [];
  let { start_time: start_date } = activities[0];
  start_date = moment(start_date, "MMM Do YY").format("ll");
  let { end_time: end_date } = activities[activities.length - 1];
  end_date = moment(end_date, "MMM Do YY").format("ll");
  selectedDays = activities.map(item => {
    let { start_time } = item;
    start_time = moment(start_time, "MMM Do YY").format("ll");
    return new Date(start_time);
  });

  return (
    <div>
      <h5>Start: {startTime}</h5>
      <h5>End: {endTime}</h5>
      <DayPicker
        month={new Date(start_date)}
        selectedDays={selectedDays}
        fromMonth={new Date(start_date)}
        toMonth={new Date(end_date)}
        onDayClick={handleDayClick}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  member: state.member
});
export default connect(mapStateToProps)(Calender);
