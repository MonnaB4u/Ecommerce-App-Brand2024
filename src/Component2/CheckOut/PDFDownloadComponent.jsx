import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const MyDocument = ({ checkoutData }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      <div className="">
      <Text>Name: {checkoutData.name}</Text>
      <Text>Email: {checkoutData.email}</Text>
      <Text>Address: {checkoutData.address}</Text>
      <Text>City: {checkoutData.city}</Text>
      <Text>Bank Name: {checkoutData.bankName}</Text>
      <Text>Card Number: {checkoutData.cardNumber}</Text>
      <Text>Ammount: ${checkoutData.total}</Text>
      <Text>Shipping: ${checkoutData.shipping}</Text>
      <Text>Taxes: {checkoutData.tax}%</Text>
      <Text>Total Ammount: ${checkoutData.grandTotal}</Text>
      </div>
      {/* Add more data as needed */}
    </Page>
  </Document>
);

const PDFDownloadComponent = ({ checkoutData }) => (
  <PDFDownloadLink document={<MyDocument checkoutData={checkoutData} />} fileName="checkout.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download Recepit'
    }
  </PDFDownloadLink>
);

const styles = {
  page: {
    padding: 20,
    margin: 20, 
  },
};

export default PDFDownloadComponent;
