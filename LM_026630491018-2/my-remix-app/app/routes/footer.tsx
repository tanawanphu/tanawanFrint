// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // ใช้ react-router-dom สำหรับการนำทาง

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold mb-4">ชื่อ-นามสกุล</h2>
            <ul>
              <li> นายธนวัลย์ พุ่มโพธิ์</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold mb-4">รหัสนักศึกษา</h2>
            <li> 026630491018-2</li>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-semibold mb-4">อีเมล</h2>
            <li> tanawan.phu@rmutto.ac.th</li>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>&copy; 026630491018-2</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
