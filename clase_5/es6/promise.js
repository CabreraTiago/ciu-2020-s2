// Como vimos antes, una API que devuelva una Promise tendrá como resultado 
// una cadena de promesas, y dividirá la función en muchas partes. Mira este código.

function getProcessedData(url) {
    return downloadData(url) // returns a promise
        .catch(e => {
            return downloadFallbackData(url) // returns a promise
        })
        .then(v => {
            return processDataInWorker(v); // returns a promise
        });
}

// Intenta reescribirlo utilizando un solo operador async

async function getProcessedData(url) {
    try {
        const data = await downloadData(url);
        const processedData = await processDataInWorker(data);

        return processedData;

    } catch (e) {
        return downloadFallbackData(url)
    }
};