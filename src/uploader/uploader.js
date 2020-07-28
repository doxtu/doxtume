const generateSessionKey = require('../platychat.utils').generateSessionKey;

module.exports = function(siofu, socket, db){

    async function updateFileMeta(e){
        const fileName = 'platychat' + generateSessionKey();
    
        let filetype = e.file.name.split('.')[1];
        e.file.name = fileName + '.' + filetype;
    }
    
    async function updateMessageWithFile(e){
    
        const fileIdentifier = '!!upload ' + e.file.meta + '%';
        const name = e.file.name;
    
        const fileTag = `<br><img src='images/${name}'>` 
    
        await new Promise(function(s,f){
           db.all(`
              UPDATE messages SET rawtext =:filetag WHERE rawtext LIKE :fileIdentifier
           `,fileTag, fileIdentifier, function(err,rows){
              if(err) f(err);
              s(rows);
           })
        }).catch(console.error);
    }

    const uploader = new siofu();
    uploader.dir = 'public/platychat/images';
    uploader.on('start',updateFileMeta);
    uploader.on('saved',updateMessageWithFile);
    uploader.listen(socket);
}