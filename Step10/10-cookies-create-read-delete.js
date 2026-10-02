// Run through Live Server.
// Each assignment creates or updates one cookie.

// Create a cookie that lasts for one day.
// SameSite=Lax controls when it is included in cross-site requests.
document.cookie =
    "misardTheme=dark; Max-Age=86400; Path=/; SameSite=Lax";

// Read cookies accessible to JavaScript.
console.log("Cookies:", document.cookie);

// Store a value containing spaces using encoding.
document.cookie =
    `misardCompany=${encodeURIComponent("MISARD Software Solutions")}; ` +
    "Max-Age=86400; Path=/; SameSite=Lax";

console.log("Updated Cookies:", document.cookie);

// Delete a cookie using the matching name and path.
// Uncomment to demonstrate deletion.

// document.cookie =
//     "misardTheme=; Max-Age=0; Path=/; SameSite=Lax";