# Chatbot IT (BUU)

โปรเจกต์แชตบอทสำหรับตอบคำถามด้าน IT ของคณะวิทยาการสารสนเทศ มหาวิทยาลัยบูรพา  
สร้างด้วย React และใช้ Gemini API (Google AI Studio)

## คุณสมบัติหลัก

- ตอบคำถามเกี่ยวกับคณะ IT เท่านั้น
- UI สวยงาม ใช้งานง่าย
- ใช้เทคโนโลยี ReactJS

## วิธีติดตั้งและใช้งาน

1. Clone โปรเจกต์นี้ลงเครื่อง
```bash
git clone https://github.com/yourusername/chatbot-it.git
```

2. เข้าโฟลเดอร์โปรเจกต์
```bash
cd chatbot-it
```

3. ติดตั้ง dependencies
```bash
npm install
```

4. สร้างไฟล์ `.env` ตามตัวอย่างใน `.env.example`  
แล้วใส่ค่า API key ของคุณ

5. รันโปรเจกต์
```bash
npm run dev
```

## ตัวอย่างไฟล์ `.env.example`

```env
VITE_API_KEY=your-api-key-here
VITE_PROJECT_ID=your-project-id
VITE_MODEL=gems-chat
```

## การใช้งานบน Production

คุณสามารถ deploy โปรเจกต์นี้บน Vercel หรือ Netlify ได้ง่าย ๆ โดยตั้งค่า Environment Variables บนแพลตฟอร์มเหล่านั้น

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
