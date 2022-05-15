import { v4 as uuidv4 } from "uuid";
export const initialValue = {
  id: uuidv4(),
  FirstName: "",
  LastName: "",
  Username: "",
  Password: "",
  Email: "",
  Status: "Active",
  UserPermissions: [
    {
      id: "c111cab3-a32e-4a43-3442-636643255842",
      code: 1,
      name: "Read",
      description: "Read a file, or read the names of the files in a folder",
      isChecked: true,
    },
    {
      id: "c111cab3-a32e-4a43-3442-636643255833",
      code: 2,
      name: "Edit",
      description: "Write or modify a file, or modify the contents of a folder",
      isChecked: false,
    },
    {
      id: "c111cab3-a32e-4a43-3442-63664325221",
      code: 3,
      name: "Delete",
      description: "Read a file, or read the names of the files in a folder",
      isChecked: false,
    },
    {
      id: "c111cab3-a32e-4a43-3442-43534534543",
      code: 4,
      name: "Create",
      description: "Read a file, or read the names of the files in a folder",
      isChecked: false,
    },
  ],
};
