const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > users.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  }
  next();
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUserItem = Object.assign({ id: newId }, req.body);
  users.push(newUserItem);
  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          users: newUserItem,
        },
      });
    }
  );
};

exports.getAllUsers = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: { results: users.length, users: users } });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((ele) => ele.id === id);

  res.status(200).json({
    status: "success",
    data: {
      users: user,
    },
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id * 1;

  const user = users.find((ele) => ele.id === id);
  res.send("return");
};

exports.deleteUser = (req, res) => {
  res.send(200).json({
    status: "success",
    message: "Deleted Successfully",
  });
};
