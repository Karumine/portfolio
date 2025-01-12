import React, { useState, useEffect } from 'react';

const WebSkills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // จำนวนหน้าที่มี
  const [isScrolling, setIsScrolling] = useState(false); // สถานะการเลื่อน

  // ใช้ useEffect เพื่อจัดการกับการจับ scroll
  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return; // ถ้ากำลังเลื่อนอยู่จะไม่ทำการเลื่อน

      // เลื่อนหน้าโดยทันที
      if (event.deltaY > 0) {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1); // เลื่อนลง
        }
      } else if (event.deltaY < 0) {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1); // เลื่อนขึ้น
        }
      }

      // เมื่อเริ่มเลื่อน จะตั้งสถานะ isScrolling เป็น true
      setIsScrolling(true); 

      // หลังจากการเลื่อนเสร็จ (1 วินาที) จะให้สามารถเลื่อนได้อีกครั้ง
      setTimeout(() => {
        // รีเซ็ต isScrolling หลังจาก 1 วินาทีเพื่อให้เลื่อนครั้งถัดไปได้
        setIsScrolling(false);
      }, 500); // ดีเลย์ 1 วินาที (1000 ms)
    };

    // ฟังการเลื่อนหน้าจอ
    window.addEventListener('wheel', handleWheel, { passive: false });

    // ลบ event listener เมื่อคอมโพเนนต์ถูก unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage, isScrolling]); // ตรวจสอบทั้ง currentPage และ isScrolling

  return (
    <div
      style={{
        height: '100vh', // ความสูงเต็มหน้าจอ
        width: '100vw', // ความกว้างเต็มหน้าจอ
        margin: 0,
        padding: 0,
        overflow: 'hidden', // ซ่อนแถบเลื่อน
        position: 'relative', // สำหรับการจัดการตำแหน่งของแต่ละหน้า
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease-in-out', // การเปลี่ยนแปลงที่นุ่มนวล
          transform: `translateY(-${(currentPage - 1) * 110}vh)`, // เลื่อนหน้าไปตาม currentPage
          width: '100%',
          height: '440vh', // ครอบคลุมทั้ง 4 หน้า
        }}
      >
        {/* หน้า 1 */}
        <div
          style={{
            height: '110vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
            backgroundImage: 'url(' + require('../assets/img/1727963115852.jpg') + ')', // ภาพพื้นหลังหลัก
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Welcome to Teyvat</h1>
          <p>Start your adventure in this mystical world.</p>
        </div>

        {/* หน้า 2 */}
        <div
          style={{
            height: '110vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
            backgroundImage: 'url(' + require('../assets/img/Mavuika.png') + ')', // ภาพพื้นหลังหลัก
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Explore the Lands of Teyvat</h1>
          <p>There are many regions waiting to be discovered.</p>
        </div>

        {/* หน้า 3 */}
        <div
          style={{
            height: '110vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
            backgroundImage: 'url(' + require('../assets/img/Citlali.png') + ')', // ภาพพื้นหลังหลัก
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Explore the Lands of Teyvat</h1>
          <p>There are many regions waiting to be discovered.</p>
        </div>

        {/* หน้า 4 */}
        <div
          style={{
            height: '110vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
            backgroundImage: 'url(' + require('../assets/img/1731714737900.jpg') + ')', // ภาพพื้นหลังหลัก
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Uncover Secrets</h1>
          <p>Unravel the mysteries of Teyvat.</p>
        </div>
      </div>
    </div>
  );
};

export default WebSkills;
