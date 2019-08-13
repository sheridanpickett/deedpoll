module.exports = ({ address, currentName, newName, witness1Name, witness1Address, witness2Name, witness2Address }) => {
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Deed Poll</title>
          <style>
            p {
              color: blue;
            }
          </style>
       </head>
       <body>
          <p>
            “I ${currentName} of ${address} have given up my name ${currentName} and have adopted for all purposes the name ${newName}.

            “Signed as a deed on [date] as ${currentName} and ${newName} in the presence of ${witness1Name} of ${witness1Address}, and ${witness2Name} of ${witness2Address}.

            “[your new signature], [your old signature]

            “[witness 1 signature], [witness 2 signature]”
          </p>
       </body>
    </html>
    `;
};
