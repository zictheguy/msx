const fs = require('fs');
const fetch = require('node-fetch');

const url = 'https://thapcamiptv.com/v1'; // Thay thế bằng đường link của bạn

async function updateJsonFile() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Ghi dữ liệu vào file JSON
    fs.writeFileSync('thapcam.json', JSON.stringify(data, null, 2));
    console.log('File JSON đã được cập nhật.');
  } catch (error) {
    console.error('Lỗi khi cập nhật file JSON:', error);
  }
}

// Gọi hàm updateJsonFile() định kỳ (ví dụ: mỗi 5 phút)
setInterval(updateJsonFile, 5 * 60 * 1000);
