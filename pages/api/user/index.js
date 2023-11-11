import connection from "../../../utils";
export default function handler(req, res) {
  connection.execute("SELECT * FROM user", function (err, results, fields) {
    res.status(200).json({ results });
  });
}
