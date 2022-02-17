export const numFormat = {

	//getChartData: (symbol, callback) => {
nFormatter: (num, digits) => {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }
}

// var tests = [
//     { num: 1234, digits: 1 },
//     { num: 100000000, digits: 1 },
//     { num: 299792458, digits: 1 },
//     { num: 759878, digits: 1 },
//     { num: 759878, digits: 0 },
//     { num: 123, digits: 1 },
//     { num: 123.456, digits: 1 },
//     { num: 123.456, digits: 2 },
//     { num: 123.456, digits: 4 }
// ];
// var i;
//   for (i = 0; i < tests.length; i++) {
//     console.log("nFormatter(" + tests[i].num + ", " + tests[i].digits + ") = " + this.nFormatter(tests[i].num, tests[i].digits));
// }

export default numFormat;