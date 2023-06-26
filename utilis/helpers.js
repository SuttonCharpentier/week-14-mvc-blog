module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: () => {
        const d = new Date();
        let year = d.getFullYear();
      return year;
    },
  };