const formidable = require('formidable');
const form = formidable({ multiples: true });



/*
    It's not image upload it's a file upload.
    it will check for file and it's file type

    image - jpg, jpeg, png, gif, bmp, tiff, svg, webp, heic, heif, ico
    video - mp4, mov, mpeg, mpg, avi, wmv, flv, mkv, 3gp, webm, ts, mts, m2ts, m4v, mpegts, mpegtsraw, mpegvideo, mpeg1video, mpeg2video, mpeg4, mpeg4video, mpeg4videoprofile, mpeg4videoprofilelevel, mpeg4videoprofilelevelasp, mpeg4videoprofilelevelavc1, mpeg4videoprofilelevelavc2, mpeg4videoprofilelevelavc3, mpeg4videoprofilelevelavc4, mpeg4videoprofilelevelavc5, mpeg4videoprofilelevelavc6, mpeg4videoprofilelevelavc7, mpeg4videoprofilelevelavc8, mpeg4videoprofilelevelavc9, mpeg4videoprofilelevelavc10, mpeg4videoprofilelevelavc11, mpeg4videoprofilelevelavc12, mpeg4videoprofilelevelavc13, mpeg4videoprofilelevelavc14, mpeg4videoprofilelevelavc15, mpeg4videoprofilelevelavc16, mpeg4videoprofilelevelavc17, mpeg4videoprofilelevelavc18, mpeg4videoprofilelevelavc19, mpeg4videoprofilelevelavc20, mpeg4videoprofilelevelavc21, mpeg4videoprofilelevelavc22, mpeg4videoprofilelevelavc23, mpeg4videoprofilelevelavc24, mpeg4videoprofilelevelavc25, mpeg4videoprofilelevelavc26, mpeg4videoprofilelevelavc27, mpeg4videoprofilelevelavc28, mpeg4videoprofilelevelavc29, mpeg4videoprofilelevelavc30, mpeg4videop
    file - pdf
*/



exports.singleImageUpload = (req) => {

    let fm = form.parse(req, (err, fields, files) => {
         if (err) return { error: err };
         return files.file;
    });

    return fm;
}