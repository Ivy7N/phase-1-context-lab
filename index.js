/* Your Code Here */
// helpers.js
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }
  
  function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  function allWagesFor() {
    const dates = this.timeInEvents.map(event => event.date);
    return dates.reduce((totalWages, date) => {
      return totalWages + wagesEarnedOnDate.call(this, date);
    }, 0);
  }
  
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor.call(employee);
    }, 0);
  }
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll,
  };
  