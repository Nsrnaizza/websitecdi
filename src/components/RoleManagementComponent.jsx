import { useState } from "react";

const RoleManagementComponent = () => {
  const initialRoles = [
    { id: "it", name: "IT" },
    { id: "rektor", name: "Rektor" },
    { id: "cs", name: "CS" },
    { id: "student", name: "Student" },
  ];

  const initialMenus = [
    { id: "menu1", name: "Menu 1" },
    { id: "menu2", name: "Menu 2" },
    { id: "menu3", name: "Menu 3" },
    { id: "menu4", name: "Menu 4" },
    { id: "menu5", name: "Menu 5" },
    { id: "menu6", name: "Menu 6" },
    { id: "menu7", name: "Menu 7" },
    { id: "menu8", name: "Menu 8" },
  ];

  const initialPermissions = {
    menu1: { it: false, rektor: true, cs: true, student: false },
    menu2: { it: false, rektor: false, cs: false, student: false },
    menu3: { it: false, rektor: false, cs: false, student: false },
    menu4: { it: false, rektor: false, cs: false, student: false },
    menu5: { it: false, rektor: false, cs: false, student: false },
    menu6: { it: false, rektor: false, cs: false, student: false },
    menu7: { it: false, rektor: false, cs: false, student: false },
    menu8: { it: false, rektor: false, cs: false, student: false },
  };

  const [permissions, setPermissions] = useState(initialPermissions);

  const handlePermissionChange = (menuId, roleId) => {
    setPermissions((prev) => ({
      ...prev,
      [menuId]: {
        ...prev[menuId],
        [roleId]: !prev[menuId][roleId],
      },
    }));
  };

  const handleSave = () => {
    console.log("Saving permissions:", permissions);
    alert("Permissions saved successfully!");
  };

  return (
    <div className="mt-4 p-3" style={{ marginLeft: "-90px", marginTop: "100px", width: "100%" }}>
      <h1 className="text-2xl font-bold mt-4 mb-6">Role Management</h1>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Menu</th>
            {initialRoles.map((role) => (
              <th key={role.id} className="border border-gray-300 px-4 py-2">
                {role.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {initialMenus.map((menu) => (
            <tr key={menu.id}>
              <td className="border border-gray-300 px-4 py-2">{menu.name}</td>
              {initialRoles.map((role) => (
                <td key={role.id} className="border border-gray-300 px-4 py-2 text-center">
                  <input type="checkbox" checked={permissions[menu.id][role.id]} onChange={() => handlePermissionChange(menu.id, role.id)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button onClick={handleSave} className="mt-4 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
          Save Permissions
        </button>
      </div>
    </div>
  );
};

export default RoleManagementComponent;
