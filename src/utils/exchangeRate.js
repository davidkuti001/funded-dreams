// Exchange rate utility - Updates hourly
// Using NGN to USD conversion (you can update this with a real API call)

let lastUpdateTime = 0;
let cachedRate = 0.000610; // Default NGN to USD rate (1 NGN = 0.000610 USD)

// Fetch current exchange rate from a free API
export async function getExchangeRate() {
    const now = Date.now();

    // Update only if cache is older than 1 hour (3600000 ms)
    if (now - lastUpdateTime > 3600000) {
        try {
            // Using exchangerate-api.com free tier
            // This returns: { rates: { USD: 0.000610... } } meaning 1 NGN = 0.000610 USD
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/NGN');
            const data = await response.json();
            cachedRate = data.rates.USD;
            console.log('Exchange rate updated: 1 NGN =', cachedRate, 'USD');
            lastUpdateTime = now;
            localStorage.setItem('exchangeRate', JSON.stringify({
                rate: cachedRate,
                timestamp: now
            }));
        } catch (error) {
            console.log('Exchange rate fetch failed, using cached rate:', cachedRate);
            // Try to get from localStorage
            const stored = localStorage.getItem('exchangeRate');
            if (stored) {
                const { rate, timestamp } = JSON.parse(stored);
                const age = now - timestamp;
                if (age < 86400000) { // Use if less than 24 hours old
                    cachedRate = rate;
                    console.log('Restored rate from cache:', cachedRate);
                }
            }
        }
    }

    return cachedRate;
}

export function convertNGNtoUSD(ngnAmount, rate) {
    // rate is the NGN to USD conversion rate (e.g., 0.000610)
    // So: 10000 NGN * 0.000610 = $6.10
    const usdAmount = ngnAmount * rate;
    return usdAmount.toFixed(2);
}

// Initialize rate from localStorage if available
const stored = localStorage.getItem('exchangeRate');
if (stored) {
    const { rate, timestamp } = JSON.parse(stored);
    const age = Date.now() - timestamp;
    if (age < 86400000) { // Use if less than 24 hours old
        cachedRate = rate;
        lastUpdateTime = timestamp;
    }
}


