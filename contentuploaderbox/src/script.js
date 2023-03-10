// NOTE: This codepen uses https://codepen.io/imperialeBox/pen/KKBMeWZ for static assets and authentication.

// How to use this CodePen:
// 1. Get started with Box Platform and create an application: https://developer.box.com/docs/getting-started-box-platform

// 2. Generate an access token using an SDK or use a developer token from https://app.box.com/developers/console/ -> your application -> configuration in the left sidebar -> Generate Developer Token. The token you use must have upload permissions to the folder you wish to upload to. BASE_UPLOAD would be an appropriate scope to downscope to. See https://developer.box.com/v2.0/docs/special-scopes-for-box-ui-elements for more details.

// 3. Whitelist 'https://s.codepen.io' in your CORS allowed origins in https://app.box.com/developers/console/ -> your application -> configuration in the left sidebar -> CORS Domains

// 4. Choose a folder ID or use '0' for the root folder.

// 5. Enter your access token below, replacing the existing access token. Replace the folder ID with yours from step 4.

const uploader = new Box.ContentUploader();

// Show the content uploader
uploader.show(configData.FOLDER_ID, configData.ACCESS_TOKEN, {
    container: '.container'
});

// Log upload data to console
uploader.on('complete', (data) => { 
    console.log(`All files successfully uploaded: ${JSON.stringify(data)}`); 
});

uploader.on('upload', (data) => {
    console.log(`Successfully uploaded file with name "${data.name}" to Box File ID ${data.id}`);
});

uploader.on('error', (data) => {
    console.log(`Error uploading file with name "${data.file.name}". The error was: "${data.error}"`);
});