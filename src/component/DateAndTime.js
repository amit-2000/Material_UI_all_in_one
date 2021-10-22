// // import React, { useState } from "react";
// // import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";

// import React, { useState } from "react";
// import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
// import { Fade } from "@material-ui/core";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
// export default function DateAndTime() {
//   const [selectedDate, handleDateChange] = useState(new Date());
//   console.log(selectedDate);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Date And Time in Material UI</h2>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <DateTimePicker
//             label="DateTimePicker"
//             inputVariant="outlined"
//             value={selectedDate}
//             onChange={handleDateChange}
//           />
//           <KeyboardDateTimePicker
//             value={selectedDate}
//             onChange={handleDateChange}
//             label="Keyboard with error handler"
//             onError={console.log}
//             minDate={new Date("2018-01-01T00:00")}
//             format="yyyy/MM/dd hh:mm a"
//           />

//           <DateTimePicker
//             value={selectedDate}
//             disablePast
//             onChange={handleDateChange}
//             label="With Today Button"
//             showTodayButton
//           />
//         </MuiPickersUtilsProvider>
//       </header>
//     </div>
//   );
// }
