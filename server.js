const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');
const PassThrough = require('stream').PassThrough;
const nodemailer = require('nodemailer');
const stripe = require('stripe')('sk_test_g76mGngIIv5jplpcHpDog4Mv00LSXW1A92');
const AWS = require('aws-sdk');
const app = express();

AWS.config.update({region: 'eu-west-1'});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/payment', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 40,
      currency: "gbp",
      description: "An example charge",
      source: req.body.id
    });
    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
})

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toStream((err, stream) => {
	  if (err) {
      console.log(err);
    }

    const pdfStream = new PassThrough();
    stream.pipe(pdfStream).pipe(res);

    const transporter = nodemailer.createTransport({
	    SES: new AWS.SES({
	        apiVersion: '2010-12-01'
	    })
		});

		transporter.sendMail({
		    from: 'sheridanpickett@gmail.com',
		    to: 'sheridan.pickett@hotmail.co.uk',
		    subject: 'Message',
		    text: 'pdf gen test',
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

app.listen(5000)
