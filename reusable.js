const randomToken = require('random-token');
var sgTransport = require('nodemailer-sendgrid-transport');
const nodemailer = require("nodemailer");

const tknGenerate = (number) => {
    randomToken.create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    let generatedToken = randomToken(number);
    return generatedToken;
}

/* Template */

function verifyTemp() {

  let year = new Date().getFullYear();
  let footer = document.querySelector("#text-footer1");
  footer.innerHTML = `Michat, ${year}`;

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet" />
      <!--<![endif]-->
    <title>Email Template</title>
    <!--[if gte mso 9]>
    <style type="text/css" media="all">
      sup { font-size: 100% !important; }
    </style>
    <![endif]-->
    
  
    <style type="text/css" media="screen">
      /* Linked Styles */
      body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none }
      a { color:#777777; text-decoration:none }
      p { padding:0 !important; margin:0 !important } 
      img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
      .mcnPreviewText { display: none !important; }
  
          
      /* Mobile styles */
      @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
        .mobile-shell { width: 100% !important; min-width: 100% !important; }
        .bg { background-size: 100% auto !important; -webkit-background-size: 100% auto !important; }
        
        .text-header,
        .m-center { text-align: center !important; }
        
        .center { margin: 0 auto !important; }
        .container { padding: 20px 10px !important }
        
        .td { width: 100% !important; min-width: 100% !important; }
  
        .m-br-15 { height: 15px !important; }
        .p30-15 { padding: 30px 15px !important; }
        .p0-15-30 { padding: 0px 15px 30px 15px !important; }
        .p0-15 { padding: 0px 15px !important; }
        .pt0 { padding-top: 0px !important; }
        .mpb30 { padding-bottom: 30px !important; }
        .mpb15 { padding-bottom: 15px !important; }
  
        .m-td,
        .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
  
        .m-block { display: block !important; }
  
        .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
  
        .column,
        .column-dir,
        .column-top,
        .column-empty,
        .column-empty2,
        .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
  
        .column-empty { padding-bottom: 30px !important; }
        .column-empty2 { padding-bottom: 10px !important; }
  
        .content-spacing { width: 15px !important; }
      }
    </style>
  </head>
  <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
      <tr>
        <td align="center" valign="top">
          <!-- Header -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" class="p30-15" style="padding: 30px;">
                <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                  <tr>
                    <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                      <!-- Header -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <th class="column" width="145" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <!-- <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="images/t7_logo.jpg" width="106" height="37" border="0" alt="" /></td> -->
                              </tr>
                            </table>
                          </th>
                          <th class="column-empty2" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                          <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="text-header" style="color:#999999; font-family:'Lato', Arial ,sans-serif; font-size:14px; line-height:18px; text-align:right;"><a href="#" target="_blank" class="link2" style="color:#999999; text-decoration:none;"><span class="link2" style="color:#1b1a1a; text-decoration:none;"><h2>Michat</h2></span></a></td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                      <!-- END Header -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- END Header -->
  
          <!-- Intro -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
            <tr>
              <td align="center">
                <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                  <tr>
                    <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="fluid-img" style="border-bottom: 7px solid #00a2ff; font-size:0pt; line-height:0pt; text-align:left;"></td>
                        </tr>
                        <tr>
                          <td class="bbrr" bgcolor="#f4f4f4" style="border-radius:0px 0px 12px 12px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="p30-15" style="padding: 50px 30px 60px 30px;">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td class="h3 center pb25" style="color:#000000; font-family:'Lato', Arial ,sans-serif; font-size:14px; line-height:32px; font-weight:bold; text-align:center; padding-bottom:25px;"></td>
                                    </tr>
                                    <tr>
                                      <td class="text-center pb25" style="color:#646363; font-family:'Lato', Arial,sans-serif; font-size:14px; line-height:30px; text-align:center; padding-bottom:25px;">Hi, welcome to Michat. I'm glad to have you with us. <br> One more step. Verify your account by clicking the button below</td>
                                    </tr>
                                    <!-- Button -->
                                    <tr>
                                      <td align="center">
                                        <table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                          <tr>
                                            <td class="text-button" style="background:#ef3050; color:#ffffff; font-family:Arial ,sans-serif; font-size:14px; line-height:18px; padding:12px 20px; text-align:center; text-transform:uppercase; font-weight:bold; border-radius:22px;"><a href="http://localhost:3000/verify/dfghfghgsf" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">VERIFY</span></a></td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- END Button -->
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!-- END Intro -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- END Intro -->
  
          
          
  
        
        
        
        
          <!-- Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
            <tr>
              <td valign="top" align="center" class="p30-15" style="padding: 50px 0px 50px 0px;">
                <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                  <tr>
                    <td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="padding-bottom: 30px;">
                            <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t7_ico_facebook.jpg" width="34" height="34" border="0" alt="" /></a></td>
                                <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t7_ico_twitter.jpg" width="34" height="34" border="0" alt="" /></a></td>
                                <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t7_ico_instagram.jpg" width="34" height="34" border="0" alt="" /></a></td>
                                <td class="img" width="34" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="images/t7_ico_linkedin.jpg" width="34" height="34" border="0" alt="" /></a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td id="text-footer1" class="text-footer1 pb10" style="color:#999999; font-family:'Lato', Arial,sans-serif; font-size:14px; line-height:20px; text-align:center; padding-bottom:10px;">Michat, 2022</td>
                        </tr>
                        <tr>
                          <!-- <td class="text-footer2 pb20" style="color:#999999; font-family:'Lato', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:20px;">East Pixel Bld. 99, Creative City 9000, Republic of Design</td> -->
                        </tr>
                        <!-- <tr>
                          <td class="text-footer2" style="color:#999999; font-family:'Lato', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><a href="#" target="_blank" class="link-grey-u" style="color:#999999; text-decoration:underline;"><span class="link-grey-u" style="color:#999999; text-decoration:underline;">Unsubscribe</span></a> from this mailing list.</td>
                        </tr> -->
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- END Footer -->
        </td>
      </tr>
    </table>
  </body>
  </html>
  
  `;
}




const mailTransporter = async (subject,toMail,body) => {


      let transporter = nodemailer.createTransport({
          host: 'smtp.sendgrid.net',
          port: 465,//25587,
          secure: true,
          auth: {
            user: 'apikey',
            pass: '',
          },
        });
  
  
    let info = await transporter.sendMail({
      from: ``,
      to: toMail,
      subject: `${subject}`,
      html: `<p>${body.message}</p>`,
    });

    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
    return await (info.messageId);
  }






exports.verifyTemp = verifyTemp;
exports.tknGenerate = tknGenerate;
exports.mailTransporter = mailTransporter;