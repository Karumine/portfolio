import React, { useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false); // สร้าง state สำหรับการควบคุมการแสดงฟอร์ม

  const toggleForm = () => {
    setIsVisible(!isVisible); // สลับการแสดงฟอร์ม
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ส่งข้อความแล้ว!");
    setIsVisible(false); // ปิดฟอร์มเมื่อส่งข้อมูล
  };

  return (
    <div className="contact-section">
      {/* ปุ่มกดเพื่อแสดง/ซ่อนฟอร์ม */}
      <button onClick={toggleForm} className="toggle-button">
        {isVisible ? "ยกเลิก" : "ติดต่อเรา"}
      </button>

      {/* หาก isVisible เป็น true จะแสดงฟอร์ม */}
      {isVisible && (
        <>
          <div className="overlay" onClick={toggleForm}></div> {/* พื้นหลังมืด */}
          <div className={`contact-form-modal ${isVisible ? "show" : ""}`}>
            
            <h2>ติดต่อเรา</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">ชื่อ:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="กรุณากรอกชื่อของคุณ"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">อีเมล:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="กรุณากรอกอีเมลของคุณ"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">ข้อความ:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="กรุณากรอกข้อความของคุณ"
                />
              </div>
              <button type="submit" className="submit-button">
                ส่งข้อความ
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
