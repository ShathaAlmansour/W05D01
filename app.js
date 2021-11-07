const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tasks = [
  {
    id: 1,
    taskName: "Sleep",
    isCompleted: false,
  },
  {
    id: 2,
    taskName: "Work",
    isCompleted: false,
  },
  {
    id: 3,
    taskName: "Play",
    isCompleted: false,
  },
];

/// Read
app.get("/tasks", (req, res) => {
  res.status(200);
  res.json(tasks);
});

/// Greate
app.post("/create", (req, res) => {
  const { id, taskName, isCompleted } = req.body;
  tasks.push({ id, taskName, isCompleted });
  res.status(201);
  res.json({ id, taskName, isCompleted });
});


/// Update
app.put("/Update", (req, res) => {
  const { id, taskName, isCompleted } = req.body;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].taskName = "Eat";
    }
  }
  res.json(tasks);
});
// app.put("/Update ")
// // app.put("/update/:id/:taskName/:isCompleted", (req, res) => {
// //   const {  id, taskName, isCompleted } = req.params;
// //   tasks = tasks.map((item, i) => {
// //     if (id === i) {
// //       return {...item, taskName = taskName };
// //     } else return item;
// //   });
// //   res.status(200);
// //   res.json({id, taskName, isCompleted });
// // });


/// Delete
app.delete("/delete", (req,res) => {
    const{id}=req.query
    console.log(id);
    tasks.splice(id-1,1)
    res.status(200);
    res.json(tasks);
});

// app.delete("/delete", (req, res) => {
//   const { id, taskName, isCompleted } = req.body;
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === id) {
//       tasks.splice(1, i);
//     }
//   }
//   res.json(tasks);
// });
 
// End 

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
