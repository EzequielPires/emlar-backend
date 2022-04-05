export const editFileName = (req, file, callback) => {
    console.log(req)
    console.log('FildName ' + file.originalname ?? file.filename)
    const name = file.originalname ? file.originalname.split('.')[0] : file.filename.split('.')[0];
    const fileExtName = file.originalname ? file.originalname.split('.')[1] : file.filename.split('.')[1];
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}.${fileExtName}`);
};

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};