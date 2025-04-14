import { Table, Button, Form, Pagination } from "react-bootstrap";
import { useState } from "react";

const DataRoleComponent = () => {
  const roles = [
    { key: "it", name: "IT", status: "Admin" },
    { key: "manager", name: "Rektor", status: "Admin" },
    { key: "mentor", name: "Dosen", status: "Admin" },
    { key: "finance", name: "Finance", status: "Admin" },
    { key: "cs", name: "Customer Service", status: "Admin" },
    { key: "publisher", name: "Publisher", status: "Admin" },
    { key: "trainer", name: "Mentor", status: "Member" },
    { key: "student", name: "Student", status: "Member" },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(search.toLowerCase()));

  const totalItems = filteredRoles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentRoles = filteredRoles.slice(startIndex, endIndex);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-5 p-3" style={{ marginLeft: "-90px", marginTop: "100px", width: "100%" }}>
      <h3>Data Role</h3>
      <Form.Control type="text" placeholder="Cari berdasarkan nama..." value={search} onChange={handleSearchChange} className="mb-3" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Key</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {currentRoles.map((role, index) => (
            <tr key={role.key}>
              <td>{startIndex + index + 1}</td>
              <td>{role.key}</td>
              <td>{role.name}</td>
              <td>{role.status}</td>
              <td>
                <Button variant="warning" size="sm">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <span>
          Menampilkan {startIndex + 1} sampai {endIndex} dari total {totalItems} data
        </span>
        <Pagination>
          {[...Array(totalPages).keys()].map((page) => (
            <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default DataRoleComponent;
