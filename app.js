const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

const loginRouter = require('./routes/loginRoutes');
const produkRouter = require('./routes/produkRoutes');
const penjualanRouter = require('./routes/penjualanRoutes');
const customerRouter = require('./routes/customerRoutes');
const dokterRouter = require('./routes/dokterRoutes');
const konsultasiRouter = require('./routes/konsultasiRoutes');
const indexRoutes = require('./routes/index');
dotenv.config();
const app = express();
app.use(express.json());
app.use('/auth', loginRouter);
app.use('/produk', produkRouter);
app.use('/penjualan', penjualanRouter);
app.use('/customer', customerRouter);
app.use('/dokter', dokterRouter);
app.use('/konsultasi', konsultasiRouter);
app.use('/',indexRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  next(createError(404));
});

// Error handling middleware
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send JSON response
  res.status(err.status || 500).json({ error: err.message });
});

// Database synchronization and server startup
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });
