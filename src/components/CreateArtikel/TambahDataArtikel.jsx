import React from "react";
import { Button, Form, Table, InputGroup } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const KontributorComponent = () => {
  const data = [
    { nama: "Trivia", slug: "Trivia" },
    { nama: "Informasi", slug: "informasi" },
    { nama: "Pengumuman", slug: "Pengumuman" },
    { nama: "Tips", slug: "Tips" },
    { nama: "Bisnis", slug: "bisnia" },
  ];

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      {/* Tombol Tambah Data */}
      <Button variant="primary" size="sm" className="fw-normal px-1 py-1 " fontSize={{}} onClick={() => navigate("/")}>
  ➕ Tambah Data
</Button>


      {/* Dropdown & Input Cari */}
      <div className="d-flex justify-content-between align-items-center mb-3">

      </div>

      {/* Tabel */}
      <Table bordered hover>
        <thead className="bg-light">
          <tr>
            <th className="text-center">
              <Form.Check type="checkbox" />
            </th>
            <th>Tag</th>
            <th>Slug</th>
            <th className="text-center">Opsi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-light" : ""}>
              <td className="text-center">
                <Form.Check type="checkbox" />
              </td>
              <td>{item.nama}</td>
              <td>{item.slug}</td>
              <td className="text-center">
                <Button variant="warning" size="sm" className="me-2">
                  <FaEdit />
                </Button>
                <Button variant="danger" size="sm">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default KontributorComponent;
