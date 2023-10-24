const ExcelJS = require('exceljs');
const mysql = require('mysql2/promise');

// MySQL database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cycoolserver',
};

// Create a new Excel workbook
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

(async () => {
  try {
    // Create a MySQL connection pool
    const connection = await mysql.createConnection(dbConfig);

    // Execute your MySQL query to fetch JSON results
    const [rows] = await connection.execute('SELECT * FROM users');

    // Define the data as an array of objects
    const data = [Object.keys(rows[0])]; // Header row

    // Populate data with JSON results
    rows.forEach((row) => {
      data.push(Object.values(row));
    });

    // Add the data to the worksheet
    worksheet.addRows(data);

    // Specify the file path where you want to save the Excel file
    const filePath = './results.xlsx';

    // Save the workbook to a file
    await workbook.xlsx.writeFile(filePath);

    console.log('Excel file saved at', filePath);
  } catch (error) {
    console.error('Error:', error);
  }
})();
