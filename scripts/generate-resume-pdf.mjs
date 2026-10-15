import fs from 'fs';
import path from 'path';

function generatePdf() {
  let stream = '';
  // Top header
  stream += 'BT\n';
  stream += '/F2 20 Tf\n';
  stream += '50 780 Td (GOVIKA M) Tj\n';
  stream += '/F1 11 Tf\n';
  stream += '0 -16 Td (Python Developer | Chennai, Tamil Nadu, India) Tj\n';
  stream += '0 -14 Td (+91-8072297525 | govikamarimuthu10@gmail.com) Tj\n';
  stream += '0 -14 Td (LinkedIn: linkedin.com/in/govika-m-2b10492a6/ | GitHub: github.com/Govika1002) Tj\n';
  
  // Section: Summary
  stream += '0 -24 Td\n';
  stream += '/F2 13 Tf (PROFESSIONAL SUMMARY) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F1 9.5 Tf (Motivated fresher with hands-on experience building web applications and automation scripts using Python.) Tj\n';
  stream += '0 -12 Td (Proficient in Django/Flask, REST APIs, and relational databases with solid grasp of OOP and data structures.) Tj\n';
  stream += '0 -12 Td (Passionate about writing clean, efficient code and eager to contribute to fast-paced software development teams.) Tj\n';

  // Section: Skills
  stream += '0 -22 Td\n';
  stream += '/F2 13 Tf (TECHNICAL SKILLS) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F1 9.5 Tf (Languages: Python, SQL, JavaScript basics) Tj\n';
  stream += '0 -12 Td (Frameworks & Libraries: Django, Django REST Framework, Flask, NumPy, Pandas, OpenCV) Tj\n';
  stream += '0 -12 Td (Databases: MySQL, PostgreSQL, SQLite, MongoDB) Tj\n';
  stream += '0 -12 Td (Concepts: OOP, Data Structures & Algorithms, Multithreading, REST APIs, Unit Testing) Tj\n';
  stream += '0 -12 Td (Developer Tools: Git, GitHub, VS Code, Postman, Docker, Linux/Bash, AWS basic) Tj\n';

  // Section: Education
  stream += '0 -22 Td\n';
  stream += '/F2 13 Tf (EDUCATION) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F2 10 Tf (B.Tech in Information Technology) Tj\n';
  stream += '/F1 9.5 Tf ( | Paavai Engineering College | 2022 - 2026 | CGPA: 83%) Tj\n';
  stream += '0 -13 Td\n';
  stream += '/F2 10 Tf (Higher Secondary Certificate - 12th Grade) Tj\n';
  stream += '/F1 9.5 Tf ( | Cheran Matric Hr Sec School | 2020 - 2022 | 74%) Tj\n';

  // Section: Experience / Internship
  stream += '0 -22 Td\n';
  stream += '/F2 13 Tf (EXPERIENCE / INTERNSHIP) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F2 10 Tf (Python Developer Intern) Tj\n';
  stream += '/F1 9.5 Tf ( | Jun 2025 - Aug 2025) Tj\n';
  stream += '0 -12 Td ( - Contributed to backend feature development for an internal Django-based web application) Tj\n';
  stream += '0 -12 Td ( - Fixed bugs and optimized database queries, improving average API response time by 20%) Tj\n';
  stream += '0 -12 Td ( - Collaborated with a team of 4 using Git for version control and Agile sprint practices) Tj\n';

  // Section: Projects
  stream += '0 -22 Td\n';
  stream += '/F2 13 Tf (KEY PROJECTS) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F2 10 Tf (Multimedia Image Steganography for Military Applications) Tj\n';
  stream += '0 -12 Td\n';
  stream += '/F1 9.5 Tf ( - Hides secret military data inside images using LSB Steganography with AES-256 encryption) Tj\n';
  stream += '0 -12 Td ( - Tech Stack: Python, Django REST Framework, PostgreSQL, JWT, OpenCV, Pillow) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F2 10 Tf (Smart Farming Assistant) Tj\n';
  stream += '0 -12 Td\n';
  stream += '/F1 9.5 Tf ( - Java-based modular advisory logic for irrigation, fertilizer, soil moisture & pest alerts) Tj\n';
  stream += '0 -12 Td ( - Tech Stack: Java, OOP, Data Structures, ArrayList, Stack) Tj\n';

  // Section: Certifications & Achievements
  stream += '0 -22 Td\n';
  stream += '/F2 13 Tf (CERTIFICATIONS & ACHIEVEMENTS) Tj\n';
  stream += '0 -14 Td\n';
  stream += '/F1 9.5 Tf ( - Python for Everybody Specialization - University of Michigan - Coursera) Tj\n';
  stream += '0 -12 Td ( - Django Web Development - Udemy | HackerRank Python Certified) Tj\n';
  stream += '0 -12 Td ( - 1st Runner-up, College-Level Coding Competition) Tj\n';
  stream += '0 -12 Td ( - Solved 150+ DSA problems on LeetCode / GeeksforGeeks in Python) Tj\n';
  stream += 'ET\n';

  const streamLen = Buffer.byteLength(stream, 'utf8');

  const pdf = [
    '%PDF-1.4',
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj',
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj',
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj',
    '6 0 obj\n<< /Length ' + streamLen + ' >>\nstream\n' + stream + 'endstream\nendobj',
  ];

  let body = pdf[0] + '\n';
  const xref = [0];
  for (let i = 1; i < pdf.length; i++) {
    xref.push(Buffer.byteLength(body, 'utf8'));
    body += pdf[i] + '\n';
  }
  const startxref = Buffer.byteLength(body, 'utf8');
  body += 'xref\n0 ' + xref.length + '\n0000000000 65535 f \n';
  for (let i = 1; i < xref.length; i++) {
    body += String(xref[i]).padStart(10, '0') + ' 00000 n \n';
  }
  body += 'trailer\n<< /Size ' + xref.length + ' /Root 1 0 R >>\nstartxref\n' + startxref + '\n%%EOF\n';

  const destPath = path.resolve('public', 'Govika_M_Resume.pdf');
  fs.writeFileSync(destPath, body, 'utf8');
  console.log('PDF written successfully to:', destPath);
}

generatePdf();
