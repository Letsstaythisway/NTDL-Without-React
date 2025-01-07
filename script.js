let taskList = [];

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);
  const task = newForm.get("task");
  const hr = newForm.get("hr");

  const obj = {
    task,
    hr,
    id: randomIdGenerator(),
  };
  taskList.push(obj);
  displayEntryList();
};

const displayEntryList = () => {
  console.log(taskList);

  let str = "";
  const entryElm = document.getElementById("entryList");
  taskList.map((item, i) => {
    str += ` <tr>
                  <td>${i + 1}</td>
                  <td>${item.task}</td>
                  <td>${item.hr}</td>
                  <td class="text-end">
                    <button onclick="handleOnDelete('${
                      item.id
                    }')" class="btn btn-danger">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button class="btn btn-success">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>`;
  });

  entryElm.innerHTML = str;
};

const randomIdGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }
  return id;
};

const handleOnDelete = (id) => {
  console.log(id);
};
