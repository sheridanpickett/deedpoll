module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Deed Poll</title>
          <style>

          </style>
       </head>
       <body>
          <p>
            “I [old name] of [your address] have given up my name [old name] and have adopted for all purposes the name [new name].

            “Signed as a deed on [date] as [old name] and [new name] in the presence of [witness 1 name] of [witness 1 address], and [witness 2 name] of [witness 2 address].

            “[your new signature], [your old signature]

            “[witness 1 signature], [witness 2 signature]”
          </p>
       </body>
    </html>
    `;
};
