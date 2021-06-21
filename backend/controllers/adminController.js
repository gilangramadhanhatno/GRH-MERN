module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },
  viewProduct: (req, res) => {
    res.render("admin/product/view_product");
  },
  viewBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },
  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
};
