import React, { Component } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';

class CreatePdfForm extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  createAndDownloadPdf = () => {
    axios.post('http://ec2-3-8-122-36.eu-west-2.compute.amazonaws.com:5000', this.state, { responseType: 'blob' })
    .then(res => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'generatedDocument.pdf');
    })
  }

  render() {
    return (
      <>
        <input
          type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input
          type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange}/>
        <input
          type="number" placeholder="Price 1" name="price1" onChange={this.handleChange}/>
        <input
          type="number" placeholder="Price 2" name="price2" onChange={this.handleChange}/>
        <button
          onClick={this.createAndDownloadPdf}>Download PDF</button>
      </>
    )
  }
}

export default CreatePdfForm
