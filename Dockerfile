# ใช้ base image
FROM node:18

# สร้าง working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package*.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมดลงใน container
COPY . .

# เปิดพอร์ตที่ container ใช้
EXPOSE 3000

# คำสั่งเริ่มต้น
CMD ["npm", "start"]
