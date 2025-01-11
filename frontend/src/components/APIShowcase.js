import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Form, Button, Table } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiShowcase = () => {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [activeTab, setActiveTab] = useState("first");

  // แจ้งเตือน--------------------------------------------------------------------
  const showToast = (message, type = "info") => {
    toast(message, {
      type,
      position: "top-center",
      autoClose: 4000, 
      hideProgressBar: true, // ซ่อนแถบแสดงความคืบหน้า
      closeOnClick: true, // ให้ปิดเมื่อคลิก
      pauseOnHover: true, // หยุดเวลานับถ้าผู้ใช้เลื่อนเมาส์ไป
      draggable: true,
      icon: false, // ลบไอคอนออก
      style: {
        backgroundColor: type === 'error' ? '#FF4D4F' : '#4BB543', // ใช้สีแดงสำหรับผิดพลาด และเขียวสำหรับสำเร็จ
        color: '#fff', // สีข้อความให้เป็นสีขาว
        borderRadius: '8px', // ขอบมน
        padding: '12px 20px', // เพิ่ม padding
        fontSize: '16px', // ปรับขนาดฟอนต์
        fontWeight: '600', // เพิ่มน้ำหนักตัวอักษร
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // เพิ่มเงา
        
      },
    });
  };

  // แอดข้อมูล-----------------------------------------------------------------
  const handleAddEmployee = (e) => {
    e.preventDefault();

    // ตรวจสอบว่ามีการกรอกข้อมูลครบถ้วนหรือไม่
    if (!fullName || !nickname || !birthDate || !gender) {
      showToast("กรุณากรอกข้อมูลให้ครบถ้วน!", "error");
      return;  // หยุดการทำงานหากข้อมูลไม่ครบ
    }

    const employeeData = { fullName, nickname, birthDate, gender };

    axios
      .post("http://localhost:5000/api/insert", employeeData)
      .then((response) => {
        showToast(response.data.message, "success");
        setUsers([...users, { ...employeeData, id: response.data.id }]);
        setFullName("");
        setNickname("");
        setBirthDate("");
        setGender("");
      })
      .catch((error) => {
        showToast("Error adding employee", "error");
        console.error(error);
      });
  };


  //แก้ไขข้อมูล-----------------------------------------------
  const handleEditEmployee = (user) => {
    setEditUser(user);
    setFullName(user.fullName);
    setNickname(user.nickname);
    setBirthDate(user.birthDate);
    setGender(user.gender);
    setActiveTab("third");
  };


  //อัพเดทข้อมูล---------------------------------------------
  const handleUpdateEmployee = (e) => {
    e.preventDefault();

    if (!fullName || !nickname || !birthDate || !gender) {
      showToast("กรุณากรอกข้อมูลให้ครบถ้วน!", "error");
      return;
    }

    const updatedData = { fullName, nickname, birthDate, gender };

    axios
      .put(`http://localhost:5000/api/update/${editUser.id}`, updatedData)
      .then((response) => {
        showToast(response.data.message, "success");
        setUsers(
          users.map((user) =>
            user.id === editUser.id ? { ...user, ...updatedData } : user
          )
        );
        setEditUser(null);
        setFullName("");
        setNickname("");
        setBirthDate("");
        setGender("");
      })
      .catch((error) => {
        showToast("Error updating employee", "error");
        console.error(error);
      });
  };


  //ดึงข้อมูล
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        const fetchedData = response.data.data.map((user) => ({
          id: user.id,
          fullName: user.full_name || "ไม่มีข้อมูล",
          nickname: user.nickname || "ไม่มีข้อมูล",
          birthDate: user.birth_date || null,
          gender: user.gender || "ไม่ระบุเพศ",
        }));
        setUsers(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  //เปลี่ยนเดือนเป็นภาษาไทยโดยที่ไม่เกี่ยวกับการคำนวณ-------------------------------------
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",  // แสดงเดือนเป็นคำเต็ม
      day: "numeric", // แสดงวัน
    });
  };

  //คำนวณอายุ---------------------------------------------------------------
  const calculateAge = (birthDate) => {
    if (!birthDate || isNaN(new Date(birthDate).getTime())) return "ไม่สามารถคำนวณได้";
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  if (loading) return <p>กำลังโหลดข้อมูล...</p>;
  if (error) return <p>เกิดข้อผิดพลาด: {error}</p>;

  return (
    <section className="apishowcase" id="apishowcases">
      <Container>
        <ToastContainer />
        <Row className="mb-4">
          <Col>
            <div className="apishowcase-bx">
              <h2>API Showcase</h2>
              <p>Here are some of the APIs I've developed and worked with:</p>
              <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center">
                  <Nav.Item>
                    <Nav.Link eventKey="first">การเพิ่มข้อมูล</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">แสดงข้อมูล</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">แก้ไขข้อมูล</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h3>เพิ่มข้อมูลพนักงาน</h3>
                    <Form onSubmit={handleAddEmployee}>
                      <Form.Group controlId="fullName">
                        <Form.Label>ชื่อเต็ม</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="กรอกชื่อเต็ม"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="nickname">
                        <Form.Label>ชื่อเล่น</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="กรอกชื่อเล่น"
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="birthDate">
                        <Form.Label>วันเกิด</Form.Label>
                        <Form.Control
                          type="date"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="gender">
                        <Form.Label>เพศ</Form.Label>
                        <Form.Control
                          as="select"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">เลือกเพศ</option>
                          <option value="male">ชาย</option>
                          <option value="female">หญิง</option>
                        </Form.Control>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        เพิ่มข้อมูล
                      </Button>
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <h3>แสดงข้อมูลพนักงาน</h3>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>ชื่อเต็ม</th>
                          <th>ชื่อเล่น</th>
                          <th>วันเกิด</th>
                          <th>อายุ</th>
                          <th>เพศ</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td>{user.fullName}</td>
                            <td>{user.nickname}</td>
                            <td>{formatDate(user.birthDate)}</td>
                            <td>{calculateAge(user.birthDate)}</td>
                            <td>{user.gender}</td>
                            <td>
                              <Button onClick={() => handleEditEmployee(user)}>
                                แก้ไข
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <h3>แก้ไขข้อมูลพนักงาน</h3>
                    {editUser && (
                      <Form onSubmit={handleUpdateEmployee}>
                        <Form.Group controlId="fullName">
                          <Form.Label>ชื่อเต็ม</Form.Label>
                          <Form.Control
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="nickname">
                          <Form.Label>ชื่อเล่น</Form.Label>
                          <Form.Control
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="birthDate">
                          <Form.Label>วันเกิด</Form.Label>
                          <Form.Control
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="gender">
                          <Form.Label>เพศ</Form.Label>
                          <Form.Control
                            as="select"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="">เลือกเพศ</option>
                            <option value="male">ชาย</option>
                            <option value="female">หญิง</option>
                          </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          อัพเดตข้อมูล
                        </Button>
                      </Form>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
