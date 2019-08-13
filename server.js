const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');
const PassThrough = require('stream').PassThrough;
const nodemailer = require('nodemailer');
const stripe = require('stripe')('sk_test_g76mGngIIv5jplpcHpDog4Mv00LSXW1A92');
const AWS = require('aws-sdk');
const path = require('path');
const app = express();

AWS.config.update({region: 'eu-west-1'});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.post('/payment', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 399,
      currency: "gbp",
      description: "An example charge",
      source: req.body.id
    });
    if(status==='succeeded') {

    }
    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
})

// const createPdf = () => {
//
// }

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body.formState), {}).toStream((err, stream) => {
	  if (err) {
      console.log(err);
    }
    const pdfStream = new PassThrough();
    stream.pipe(pdfStream);
    const transporter = nodemailer.createTransport({
	    SES: new AWS.SES({
	        apiVersion: '2010-12-01'
	    })
		});
		transporter.sendMail({
		    from: 'deedpollonline@gmail.com',
		    to: 'sheridan.pickett@hotmail.co.uk',
		    subject: 'Deed Poll UK Confirmation',
		    text: `
        Hello ${req.body.formState.currentName},
        This is to confirm payment had been accepted.
        Please find your custom Deed Poll attached.`,
		    attachments: [
		    	{
		    		filename: 'deedpoll.pdf',
		    		content: pdfStream
		    	}
		    ]
		}, (err, info) => {
			if(err) {
				console.log(err);
			}
		});
  });
})

app.listen(8000)
