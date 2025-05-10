const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDb = require("./config/db.js");
const ContactRoute = require('./routes/ContactRoute');
const FinanceRoute = require('./routes/FinanaceRoute');
const SipRoute = require('./routes/SipRoute');
const InsuranceRoute = require('./routes/InsuranceRoute');
const AuthRoutes = require('./routes/AuthRoute.js')
const blogRoutes = require('./routes/Blogroute.js')
dotenv.config();
connectDb();

const app = express();

// ✅ CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://cover-mitra-backend.vercel.app',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Serve static files from /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ API routes
app.use('/api/v1/insurance', InsuranceRoute);

app.use('/api/v1/sip', SipRoute);
app.use('/api/v1/finance', FinanceRoute);
app.use('/api/v1/user', ContactRoute);
app.use('/admin',AuthRoutes)
app.use('/api/v1/blogs',blogRoutes)
// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello, this is the backend app");
});

// ✅ Start server
app.listen(4000, () => {
  console.log("✅ Server is running on http://localhost:4000");
});
