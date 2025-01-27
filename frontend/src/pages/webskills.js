import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // นำเข้า Three.js
import './webskills.css';

const WebSkills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const [isScrolling, setIsScrolling] = useState(false); // สถานะการเลื่อน
  const [selected, setSelected] = useState(''); // สถานะเมนูที่เลือก
  const threeCanvasRef = useRef(null);

  // เลื่อนหน้า
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

  // กันซูม
  useEffect(() => {
    const disableZoom = (event) => {
      if (event.ctrlKey || event.deltaY || event.scale) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', disableZoom, { passive: false });
    window.addEventListener('gesturestart', disableZoom, { passive: false });
    window.addEventListener('gesturechange', disableZoom, { passive: false });

    return () => {
      window.removeEventListener('wheel', disableZoom);
      window.removeEventListener('gesturestart', disableZoom);
      window.removeEventListener('gesturechange', disableZoom);
    };
  }, []);

  // เพิ่มกราฟิก 3D ในหน้าที่ 2
  useEffect(() => {
    if (currentPage === 2 && threeCanvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        threeCanvasRef.current.clientWidth / threeCanvasRef.current.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ canvas: threeCanvasRef.current });
      renderer.setSize(
        threeCanvasRef.current.clientWidth,
        threeCanvasRef.current.clientHeight
      );

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 1;

      const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();

      return () => {
        renderer.dispose();
      };
    }
  }, [currentPage]);

  // ฟังก์ชัน handleClick สำหรับการเลือกเมนู
  const handleClick = (menu) => {
    setSelected(menu);
    switch (menu) {
      case 'หน้าหลัก':
        setCurrentPage(1);
        break;
      case 'ข้อมูลตัวละคร':
        setCurrentPage(2);
        break;
      default:
        setCurrentPage(1);
        break;
    }
  };

  return (
    <div className="main">
      {/* แสดง Navbar เฉพาะในหน้าอื่นๆ */}
      {currentPage !== 1 && (
        <div className="navbar2">
          <img src="https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20250113hy6b9f6sjk/upload/7bd4c5fe5920d8d255c1fdc429c3ec02_3741102009722655885.png?x-oss-process=image/format,webp/quality,Q_90"
            alt="Logo Icon" className="navbar-icon" />
          <div onClick={() => handleClick('หน้าหลัก')} className={`pz-button ${selected === 'หน้าหลัก' ? 'active' : ''}`}>
            หน้าหลัก
          </div>
          <div onClick={() => handleClick('ข้อมูลตัวละคร')} className={`pz-button ${selected === 'ข้อมูลตัวละคร' ? 'active' : ''}`}>
            ข้อมูลตัวละคร
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
          {/* Canvas สำหรับกราฟิก 3D */}
          <canvas
            ref={threeCanvasRef}
            className="three-canvas"
            style={{ width: '100%', height: '400px', zIndex: 1 }}
          ></canvas>
        </div>

        {/* หน้า 3 */}
        <div className="page page3">
          <h1>Explore the Lands of Teyvat</h1>
          <p>There are many regions waiting to be discovered.</p>
        </div>

        {/* หน้า 4 */}
        <div className="page page4">
          <h1>Uncover Secrets</h1>
          <p>Unravel the mysteries of Teyvat.</p>
        </div>
      </div>
    </div>
  );
};

export default WebSkills;
