export const downloadPDF = (req, res) => {
  res.download("./Resume-WebDev.pdf", (err) => {
    if (err) console.log(err);
  });
};
