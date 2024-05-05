import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#10B77F',
    pageLayout: "singlePage"
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1
  },
  header: {
    textAlign: "center",
    marginBotto: 20,
    borderBottom: "3pt solid #022C22",
    paddingBottom: 10,
    fontSize: 40,
  },
  imagen: {
    marginBottom: 10,
    alignSelf: "center",
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10 ,
  },
  description: {
    textAlign: "center",
    marginTop: 15,
  },
  body: {
    textAlign: "justify",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

// Create Document Component
const Pdf = ({guitarra}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text>{guitarra.marca} {guitarra.nombre}</Text>
        </View>
        <Image src={guitarra.imagen} style={styles.imagen}/>
        <View style={styles.description}>
          <Text>Tipo: {guitarra.tipo}</Text>
        </View>
        <View style={styles.body}>
          <Text>{guitarra.descripcion}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Pdf;