// src/components/LetterLayout.jsx
import React from 'react';

export default function LetterLayout({ children, frontmatter }) {
  // Lấy dữ liệu từ frontmatter của file markdown truyền sang
  const { date = "9th July 2026", ott } = frontmatter || {};

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '10px', borderRadius: '8px', margin: '10px auto', maxWidth: '770px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '750px', margin: '0 auto', padding: '40px 20px', color: '#000000', lineHeight: '1.6', backgroundColor: '#ffffff' }}>
        
        {/* Thông tin liên hệ */}
        <div style={{ textAlign: 'right', marginBottom: '50px', fontSize: '14px', color: '#000000' }}>
          <div style={{ marginBottom: '8px' }}>+84 944928372 📞</div>
          <div style={{ marginBottom: '8px' }}>dinhlongtr.hcmcyu@gmail.com ✉</div>
          <div>trandinhlong.id.vn 🌐</div>
        </div>

        {/* Ngày tháng */}
        <div style={{ marginBottom: '35px', fontWeight: 'bold', fontSize: '16px', color: '#000000' }}>
          {date}
        </div>

        {/* Cấu trúc OTT */}
        {ott && (
          <div style={{ marginBottom: '20px', fontSize: '15px', color: '#000000' }}>
            <span style={{ fontWeight: 'bold' }}>OTT:</span> {ott}
          </div>
        )}

        {/* Nội dung bài viết thuần Markdown sẽ đổ vào đây */}
        <div style={{ marginBottom: '120px', fontSize: '15px', minHeight: '200px', color: '#000000' }}>
          <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Bản tin:</span>
          <div className="markdown-content" style={{ color: '#000000' }}>
            {children}
          </div>
        </div>

        {/* Khối chữ ký và con dấu chồng lên nhau */}
        <div style={{ position: 'relative', width: '300px', marginTop: '50px', color: '#000000' }}>
          <div style={{ fontSize: '15px', marginBottom: '5px', paddingLeft: '35px' }}>Kind Regards,</div>
          <div style={{ position: 'relative', height: '130px' }}>
           <img src="../content/posts/cd1.png" alt="Con dấu" style={{ position: 'absolute', left: '10px', top: '5px', width: '125px', height: 'auto', zIndex: 2, pointerEvents: 'none' }} />
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '15px', marginTop: '5px', paddingLeft: '35px' }}>
            Trần Đình Long
          </div>
        </div>

      </div>
    </div>
  );
}
