// Execute only if it is a webpart
if(typeof isWebpart != 'undefined' && isWebpart) {

    // Prefilter to add OAuth token
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {

        // Add OAuth token if found in local storage
        if (localStorage.getItem('_token')) {
            var access_token = JSON.parse(localStorage.getItem('_token')).accessToken;
            jqXHR.setRequestHeader('Authorization', 'Bearer ' + access_token);
        }
    });
}
