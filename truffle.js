function callGoogleMapsAPI() {
    try {
        if (!appConfig) {
            throw new Error('Configuration is not loaded.');
        }
        document.getElementById('secretArea').innerText = "Retrieved Google Maps API Key: " + appConfig.apiKeys.googleMaps;
    } catch (error) {
        handleError(error);
    }
}

function callWeatherAPI() {
    try {
        if (!appConfig) {
            throw new Error('Configuration is not loaded.');
        }
        document.getElementById('secretArea').innerText = "Retrieved Weather API Key: " + appConfig.apiKeys.weatherAPI;
    } catch (error) {
        handleError(error);
    }
}

function alertDeveloper() {
    try {
        if (!appConfig) {
            throw new Error('Configuration is not loaded.');
        }
        document.getElementById('secretArea').innerText = "Retrieved Dev email address for phishing: " + appConfig.developerEmail;
    } catch (error) {
        handleError(error);
    }
}

function fetchFromDatabase() {
    try {
        if (!appConfig) {
            throw new Error('Configuration is not loaded.');
        }
        document.getElementById('secretArea').innerText = "Retrieved database user name and password:  " + appConfig.database.username + " " + appConfig.database.password;
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    console.log('An error occurred:', error.message);
    // Simulate sending error message to developer.
    console.error('An error occurred. The developer has been notified:', appConfig.developerEmail);
}
