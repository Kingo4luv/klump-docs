{% apikeyslayout title="Api Keys" readingTime="5m" date="25/09/2024" %}


Every API request to Klump's endpoints must include an API key, specifically the Klump secret key. If you do not include an API key with your request, or if you use an incorrect or outdated key, Klump will reject it and return an error.

Klump offers two types of keys: `test` keys and `live` keys. When you're ready to go live, use your test keys in your sandbox or development environment, and your `live` keys when you're ready to go live.

When you sign up for Klump, your API keys are generated automatically. To obtain your keys, please go to the merchant dashboard, click on the **Settings** link, and look for your API key under the **API Keys & Webhook** tabs.

The keys you get will be dependent on the state of your application (`LIVE` or `TEST`).

![Klump merchant dashboard](/img/api-keys.png)

_Klump merchant dashboard_

---

## Authorization

Every communication with an API will require the secret key, which must be sent via a header `klump-secret-key`. We strongly advise you to keep your secret key on your own server and only make it available to team members who absolutely need to have it.

See the code sample below for an example.


```curl
curl --location --request GET 'https://api.useklump.com/v1/transactions/:reference/verify' \
--header 'Content-Type: application/json' \
--header 'klump-secret-key: {{KLUMP_SEC_KEY}}'
```

When communicating with Klump on the client side, you must include the public Key in the request. You'll need to pass it as a parameter into an instance of a Klump object. In addition, the key must be called public Key.

```javascript
<script>
  const data = {
     publicKey: 'klp_pk_1234abdc5678'
  }
</script>
```

## Security

While we strongly recommend you to keep your keys private, we recognize that bad things do happen. If your key has been compromised or you suspect something has gone wrong, we strongly advise you to generate a new key right away. When you generate a new key, all previous keys become invalid, and Klump will not honor requests sent with those keys.


{% / apikeyslayout %}