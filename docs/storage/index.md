## Storage
- browser and device specific
- cookies
  - 4kb
  - client and server
- local storage
  - 10MB
  - client
- session storage
  - 5MB
  - client

## Securing Local Storage
Storing tokens in local storage can pose security risks, as local storage is vulnerable to various types of attacks, such as cross-site scripting (XSS) and cross-site request forgery (CSRF). However, if you must store tokens in local storage for your application, there are some measures you can take to mitigate these risks and enhance security:

Use HTTPS: Always serve your web application over HTTPS to encrypt data transmitted between the client and server. HTTPS provides a secure channel for communication and helps prevent eavesdropping and man-in-the-middle attacks.

Implement Content Security Policy (CSP): Use CSP headers to mitigate the risk of XSS attacks by restricting the sources from which scripts can be executed. CSP can help prevent malicious scripts from accessing sensitive data stored in local storage.

Limit Scope and Expiry: Store tokens with limited scope and expiry to minimize the impact if they are compromised. Use short-lived access tokens and refresh tokens with limited scope to reduce the window of opportunity for attackers.

Do Not Store Sensitive Data: Avoid storing sensitive information such as passwords or personally identifiable information (PII) in local storage. Store only the necessary tokens and minimal user data required for authentication and authorization.

Use Same-Site Cookies: Set the SameSite attribute on cookies to prevent CSRF attacks by restricting cookies from being sent in cross-origin requests. Setting SameSite to "Strict" or "Lax" can help mitigate the risk of CSRF attacks.

Implement CSRF Protection: Implement CSRF protection mechanisms such as synchronizer tokens or double-submit cookies to prevent unauthorized requests from being executed on behalf of authenticated users.

Encrypt Tokens: Encrypt tokens before storing them in local storage to add an extra layer of security. Use strong encryption algorithms and secure key management practices to protect sensitive data from unauthorized access.

Regularly Rotate Tokens: Regularly rotate tokens to invalidate old tokens and mitigate the risk of token theft or misuse. Implement token rotation policies and revoke tokens when they are no longer needed or if suspicious activity is detected.

Use Third-party Authentication Providers: Consider using third-party authentication providers such as OAuth 2.0 or OpenID Connect (OIDC) for authentication and authorization. These providers handle token management securely and offload the responsibility of token storage and validation to trusted third parties.

Monitor and Audit: Monitor local storage usage and audit access to sensitive data stored in local storage. Implement logging and monitoring mechanisms to detect and respond to security incidents promptly.