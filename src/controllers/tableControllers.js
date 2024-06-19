import { IDOLS } from "../constants/TableData.js";

export const getTableData = (req, res) => {
  if (req.query.sun || req.query.moon || req.query.rising || req.query.name) {
    const filteredData = IDOLS.filter((idol) => {
      return (req.query.name === "" ||
        idol.name.toLowerCase().includes(req.query.name) ||
        req.query.name === null) &&
        (req.query.sun === "0" ||
          req.query.sun === null ||
          idol.sun === parseInt(req.query.sun)) &&
        (req.query.moon === "0" ||
          req.query.moon === null ||
          idol.moon === parseInt(req.query.moon)) &&
        (req.query.rising === "0" ||
          req.query.rising === null ||
          idol.rising === parseInt(req.query.rising))
        ? idol
        : null;
    });
    res.json({
      data: filteredData,
    });
  } else {
    res.json({ data: IDOLS });
  }
};
