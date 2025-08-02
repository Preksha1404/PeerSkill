# PeerSkill - Peer-to-Peer Learning Platform

**PeerSkill** is a web-based platform where users can offer their skills and learn new ones from others in the community. It's a collaborative ecosystem that encourages knowledge exchange, skill building, and community growth.

---

## 🚀 MVP Features

### 1. 🧑‍💻 User Authentication (Register/Login)
- **What**: Allows users to create an account and log in securely using email and password.
- **Why**: Required to personalize the experience, manage skills, and enable secure interactions between users.
- **Tech**: JWT-based authentication, bcrypt for password hashing.

### 2. 🎯 Skill Management (Offer Skills)
- **What**: Users can add, edit, or remove skill offerings (e.g., "Teach JavaScript", "Teach Guitar").
- **Why**: Core feature enabling users to showcase what they can teach.
- **Fields**: Skill name, description, category, availability.

### 3. 📥 Request to Learn a Skill
- **What**: Users can browse available skills and request to learn from others.
- **Why**: Establishes connections between users with complementary needs (learn/teach).
- **Status Flow**: Sent → Accepted/Rejected → Complete

### 4. 💬 Communication System (Chat)
- **What**: Enables users to chat after their skill request is accepted.
- **Why**: Facilitates scheduling, clarifying learning goals, and peer interaction.
- **Optional Tech**: WebSocket (Socket.io) or basic message threads via REST API.

### 5. ⭐ Ratings and Reviews (Optional for MVP)
- **What**: Learners can leave feedback and a rating after completing a skill session.
- **Why**: Builds trust, helps future learners choose skilled and helpful users.
- **Fields**: Rating (1–5), comment, reviewer ID, skill ID.

---

## 🧱 Technology Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: MongoDB (Mongoose ODM)

---

## 📌 Future Enhancements (Post-MVP)

- Profile customization (bio, profile picture, skills summary)
- Calendar or scheduling integration
- Email notifications
- Skill certification badges
- Admin panel for content/report management

## Database Schema: https://app.eraser.io/workspace/sFO17th232pva6yFmAaR?origin=share
---