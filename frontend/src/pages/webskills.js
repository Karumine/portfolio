import React, { useState, useEffect, useRef } from 'react';
import './webskills.css'; // สไตล์ CSS ที่ปรับแต่งเพิ่มเติม

const WebSkills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const [isScrolling, setIsScrolling] = useState(false);
  const [selected, setSelected] = useState('หน้าหลัก');
  const threeCanvasRef = useRef(null);

  useEffect(() => {
    // ปิดการซูม
    const disableZoom = (event) => {
      if (event.ctrlKey || event.metaKey || event.deltaY !== 0) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', disableZoom, { passive: false });

    return () => {
      window.removeEventListener('wheel', disableZoom);
    };
  }, []);



  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return;

      if (event.deltaY > 0) {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      } else if (event.deltaY < 0) {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage, isScrolling]);

  const handleClick = (menu) => {
    setSelected(menu);
    switch (menu) {
      case 'หน้าหลัก':
        setCurrentPage(1);
        break;
      case 'ข้อมูลตัวละคร':
        setCurrentPage(2);
        break;
      case 'หน้า 3':
        setCurrentPage(3);
        break;
      case 'หน้า 4':
        setCurrentPage(4);
        break;
      default:
        setCurrentPage(1);
        break;
    }
  };

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setSelected('หน้าหลัก');
        break;
      case 2:
        setSelected('ข้อมูลตัวละคร');
        break;
      case 3:
        setSelected('อาวุทใหม่');
        break;
      case 4:
        setSelected('กิจกรรมประจำเวอชัน');
        break;
      default:
        setSelected('');
        break;
    }
  }, [currentPage]);

  return (
    <div className="main1">
      {/* เมนู */}
      {currentPage !== 1 && (
        <div className="navbar1">
          <img
            src="https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20250113hy6b9f6sjk/upload/7bd4c5fe5920d8d255c1fdc429c3ec02_3741102009722655885.png?x-oss-process=image/format,webp/quality,Q_90"
            alt="Logo Icon"
            className="navbar-icon"
          />
          <div className="navbar2">
            <div
              onClick={() => handleClick('หน้าหลัก')}
              className={`pz-button ${selected === 'หน้าหลัก' ? 'active' : ''}`}
            >
              <div className="pz-text">หน้าหลัก</div>
            </div>
            <div
              onClick={() => handleClick('ข้อมูลตัวละคร')}
              className={`pz-button ${selected === 'ข้อมูลตัวละคร' ? 'active' : ''}`}
            >
              <div className="pz-text">ข้อมูลตัวละคร</div>
            </div>
            <div
              onClick={() => handleClick('หน้า 3')}
              className={`pz-button ${selected === 'อาวุทใหม่' ? 'active' : ''}`}
            >
              <div className="pz-text">อาวุทใหม่</div>
            </div>
            <div
              onClick={() => handleClick('หน้า 4')}
              className={`pz-button ${selected === 'กิจกรรมประจำเวอชัน' ? 'active' : ''}`}
            >
              <div className="pz-text">กิจกรรมประจำเวอชัน</div>
            </div>
          </div>
        </div>
      )}

      <div
        className="pages"
        style={{
          transform: `translateY(-${(currentPage - 1) * 100}vh)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {/* หน้า 1 */}
        <div className="page page1">
          <h1>Welcome to the WebSkills App!</h1>
        </div>

        {/* หน้า 2 */}
        <div className="page page2">
          <div className="background-page2">
            <div className="logo-element-page2">
              
              
            </div>
          </div>
        </div>


        {/* หน้า 3 */}
        <div className="page page3">
          <h1>Uncover Secrets</h1>
          <p>Unravel the mysteries of Teyvat.</p>
        </div>

        {/* หน้า 4 */}
        <div className="page page4">
          <h1>Join the Adventure</h1>
          <p>Experience the world of Teyvat!</p>
        </div>
      </div>
    </div>
  );
};

export default WebSkills;
