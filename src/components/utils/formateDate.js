const dayjs = require("dayjs");

export const formatDate = (dateString) => {
  return dayjs(dateString).format("MMMM YYYY");
};
