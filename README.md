# 📚 Library Management API

A Library Management System API developed with **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**.  
This API allows managing books, borrowing books, and getting borrow summaries with proper validations and business logic.

---

## 🚀 **Features**

✅ Create, update, delete books  
✅ Borrow books (with availability & quantity check)  
✅ Borrow summary (aggregation pipeline)  
✅ Filter, sort, limit books  
✅ Validation & error handling  
✅ Clean, modular code

---

## 🛠 **Tech Stack**

- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)

---

## 📌 **Setup Instructions**

1️⃣ Clone the repo:

```bash
git clone <your-repo-link>
cd <project-folder>
```

```bash
npm install
# or if using bun:
bun install

```

```bash
PORT=5000
MONGODB_URI=your-mongodb-connection-string

```

package.json

```bash

# Add this for bun
"dev": "bun --watch src/server.ts",


```

```bash

npm run dev
# or
bun run dev

```
